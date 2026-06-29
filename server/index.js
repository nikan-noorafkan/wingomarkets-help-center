import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 5001;
const JWT_SECRET = process.env.JWT_SECRET || 'wingo-jwt-secret-key-12345!';

// Resolve public uploads directory inside wingomarkets-help-center project
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const UPLOADS_DIR = path.join(__dirname, '../public/uploads');

// Ensure uploads directory exists
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));
app.use(express.json({ limit: '15mb' }));
app.use(cookieParser());

// Audit logger helper
const logAudit = async (user, action, entityType, entityId, details) => {
  try {
    await prisma.auditLog.create({
      data: {
        userId: user?.id || null,
        userName: user?.name || 'Anonymous / Public',
        action,
        entityType,
        entityId: String(entityId),
        details: typeof details === 'object' ? JSON.stringify(details) : details,
      }
    });
  } catch (e) {
    console.error('Audit logging error:', e);
  }
};

// Gating middlewares
const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ error: 'Access denied. Please sign in.' });
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    res.clearCookie('token');
    return res.status(403).json({ error: 'Session expired. Please sign in again.' });
  }
};

const requireRoles = (roles) => (req, res, next) => {
  if (!req.user || !roles.includes(req.user.role)) {
    return res.status(403).json({ error: 'Access forbidden: Insufficient roles.' });
  }
  next();
};

// ----------------------------------------------------
// AUTH ENDPOINTS
// ----------------------------------------------------

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }
    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }
    const token = jwt.sign(
      { id: user.id, name: user.name, email: user.email, role: user.role, mustChangePassword: user.mustChangePassword },
      JWT_SECRET,
      { expiresIn: '8h' }
    );
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 8 * 60 * 60 * 1000 // 8 hours
    });
    return res.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        mustChangePassword: user.mustChangePassword
      }
    });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.post('/api/auth/logout', (req, res) => {
  res.clearCookie('token');
  return res.json({ success: true });
});

app.get('/api/auth/verify', (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.json({ user: null });
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return res.json({ user: decoded });
  } catch (e) {
    res.clearCookie('token');
    return res.json({ user: null });
  }
});

app.post('/api/auth/change-password', authenticateToken, async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  if (!currentPassword || !newPassword) {
    return res.status(400).json({ error: 'Current password and new password are required.' });
  }
  try {
    const dbUser = await prisma.user.findUnique({ where: { id: req.user.id } });
    const valid = await bcrypt.compare(currentPassword, dbUser.passwordHash);
    if (!valid) {
      return res.status(400).json({ error: 'Incorrect current password.' });
    }
    const newHash = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({
      where: { id: req.user.id },
      data: {
        passwordHash: newHash,
        mustChangePassword: false
      }
    });
    // Clear and sign in with updated token
    const token = jwt.sign(
      { id: dbUser.id, name: dbUser.name, email: dbUser.email, role: dbUser.role, mustChangePassword: false },
      JWT_SECRET,
      { expiresIn: '8h' }
    );
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 8 * 60 * 60 * 1000
    });
    await logAudit(req.user, 'CHANGE_PASSWORD', 'user', dbUser.id, 'User changed password.');
    return res.json({ success: true });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

// ----------------------------------------------------
// PUBLIC API DATA LOADER (For Frontend Sync)
// ----------------------------------------------------

app.get('/api/public/data', async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { displayOrder: 'asc' },
      include: { translations: true }
    });

    const articles = await prisma.article.findMany({
      where: { status: 'published' },
      include: { translations: true }
    });

    const shortcuts = await prisma.taskShortcut.findMany({
      orderBy: { displayOrder: 'asc' },
      include: { translations: true }
    });

    const settings = await prisma.supportSettings.findUnique({ where: { id: 1 } });

    return res.json({ categories, articles, shortcuts, settings });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

// ----------------------------------------------------
// ARTICLES ENDPOINTS
// ----------------------------------------------------

app.get('/api/articles', async (req, res) => {
  try {
    const articles = await prisma.article.findMany({
      include: { translations: true, category: { include: { translations: true } } }
    });
    return res.json(articles);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.get('/api/articles/:slug', async (req, res) => {
  const { slug } = req.params;
  try {
    let article = await prisma.article.findUnique({
      where: { slug },
      include: { translations: true, category: { include: { translations: true } } }
    });

    if (!article) {
      // Check redirects table
      const redirect = await prisma.redirect.findUnique({ where: { oldSlug: slug } });
      if (redirect) {
        article = await prisma.article.findUnique({
          where: { slug: redirect.newSlug },
          include: { translations: true, category: { include: { translations: true } } }
        });
        if (article) {
          return res.json({ redirect: true, newSlug: redirect.newSlug, article });
        }
      }
      return res.status(404).json({ error: 'Article not found.' });
    }

    return res.json(article);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.post('/api/articles', authenticateToken, requireRoles(['admin', 'editor']), async (req, res) => {
  const { slug, categoryId, pillar, templateType, regionVariant, status, relatedArticleIds, complianceRequired, translations } = req.body;
  if (!slug || !categoryId || !templateType) {
    return res.status(400).json({ error: 'Slug, categoryId, and templateType are required.' });
  }
  try {
    const existing = await prisma.article.findUnique({ where: { slug } });
    if (existing) return res.status(400).json({ error: 'Slug is already in use.' });

    // Validate compliance review rules
    let isPublished = status === 'published';
    let complianceReviewRequired = ['C', 'D'].includes(templateType) || complianceRequired;
    if (isPublished && complianceReviewRequired) {
      return res.status(400).json({ error: 'Publishing Template C/D articles requires active Compliance Reviewer sign-off first. Saved as draft.' });
    }

    const newArticle = await prisma.article.create({
      data: {
        slug,
        categoryId,
        pillar,
        templateType,
        regionVariant: regionVariant || 'global',
        status: isPublished ? 'published' : 'draft',
        relatedArticleIds: JSON.stringify(relatedArticleIds || []),
        complianceRequired: complianceReviewRequired,
        createdBy: req.user.email,
        updatedBy: req.user.email,
        translations: {
          create: translations.map(t => ({
            locale: t.locale,
            title: t.title,
            description: t.description,
            summary: t.summary || '',
            content: typeof t.content === 'object' ? JSON.stringify(t.content) : t.content,
            seoMetaTitle: t.seoMetaTitle || t.title,
            seoMetaDescription: t.seoMetaDescription || t.description,
            seoOgImage: t.seoOgImage || '',
            seoCanonicalUrl: t.seoCanonicalUrl || '',
            translationStatus: t.translationStatus || 'draft'
          }))
        }
      },
      include: { translations: true }
    });

    await logAudit(req.user, 'CREATE_ARTICLE', 'article', newArticle.id, `Created article: ${slug}`);
    return res.json(newArticle);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.put('/api/articles/:id', authenticateToken, requireRoles(['admin', 'editor']), async (req, res) => {
  const { id } = req.params;
  const { slug, categoryId, pillar, templateType, regionVariant, status, relatedArticleIds, complianceRequired, translations } = req.body;
  try {
    const oldArticle = await prisma.article.findUnique({ where: { id: parseInt(id) } });
    if (!oldArticle) return res.status(404).json({ error: 'Article not found.' });

    // Slug change redirect handler
    if (slug !== oldArticle.slug) {
      const existingSlug = await prisma.article.findUnique({ where: { slug } });
      if (existingSlug) return res.status(400).json({ error: 'New slug is already in use.' });

      // Auto create redirect rule
      await prisma.redirect.upsert({
        where: { oldSlug: oldArticle.slug },
        update: { newSlug: slug },
        create: { oldSlug: oldArticle.slug, newSlug: slug }
      });
    }

    // Verify Compliance signoff conditions
    let isPublished = status === 'published';
    let complianceReviewRequired = ['C', 'D'].includes(templateType) || complianceRequired;
    if (isPublished && complianceReviewRequired && !oldArticle.complianceSignedOffBy) {
      return res.status(400).json({ error: 'Publishing Template C/D articles requires active Compliance Reviewer sign-off first. Saved as draft.' });
    }

    // Delete existing translations first
    await prisma.articleTranslation.deleteMany({ where: { articleId: parseInt(id) } });

    const updated = await prisma.article.update({
      where: { id: parseInt(id) },
      data: {
        slug,
        categoryId,
        pillar,
        templateType,
        regionVariant: regionVariant || 'global',
        status: status || oldArticle.status,
        relatedArticleIds: JSON.stringify(relatedArticleIds || []),
        complianceRequired: complianceReviewRequired,
        updatedBy: req.user.email,
        translations: {
          create: translations.map(t => ({
            locale: t.locale,
            title: t.title,
            description: t.description,
            summary: t.summary || '',
            content: typeof t.content === 'object' ? JSON.stringify(t.content) : t.content,
            seoMetaTitle: t.seoMetaTitle || t.title,
            seoMetaDescription: t.seoMetaDescription || t.description,
            seoOgImage: t.seoOgImage || '',
            seoCanonicalUrl: t.seoCanonicalUrl || '',
            translationStatus: t.translationStatus || 'draft'
          }))
        }
      },
      include: { translations: true }
    });

    await logAudit(req.user, 'UPDATE_ARTICLE', 'article', updated.id, `Updated article: ${slug}`);
    return res.json(updated);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.post('/api/articles/:id/signoff', authenticateToken, requireRoles(['compliance_reviewer', 'admin']), async (req, res) => {
  const { id } = req.params;
  try {
    const article = await prisma.article.findUnique({ where: { id: parseInt(id) } });
    if (!article) return res.status(404).json({ error: 'Article not found.' });

    const updated = await prisma.article.update({
      where: { id: parseInt(id) },
      data: {
        complianceSignedOffBy: req.user.email,
        complianceSignedOffAt: new Date()
      }
    });

    await logAudit(req.user, 'COMPLIANCE_SIGNOFF', 'article', id, `Signed off compliance for article: ${article.slug}`);
    return res.json(updated);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.delete('/api/articles/:id', authenticateToken, requireRoles(['admin']), async (req, res) => {
  const { id } = req.params;
  try {
    const article = await prisma.article.findUnique({ where: { id: parseInt(id) } });
    if (!article) return res.status(404).json({ error: 'Article not found.' });

    await prisma.article.delete({ where: { id: parseInt(id) } });
    await logAudit(req.user, 'DELETE_ARTICLE', 'article', id, `Deleted article: ${article.slug}`);
    return res.json({ success: true });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

// ----------------------------------------------------
// CATEGORY ENDPOINTS
// ----------------------------------------------------

app.get('/api/categories', async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { displayOrder: 'asc' },
      include: { translations: true }
    });
    return res.json(categories);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.put('/api/categories/reorder', authenticateToken, requireRoles(['admin', 'editor']), async (req, res) => {
  const { orders } = req.body; // Array of { id, displayOrder }
  try {
    for (const item of orders) {
      await prisma.category.update({
        where: { id: item.id },
        data: { displayOrder: item.displayOrder }
      });
    }
    await logAudit(req.user, 'REORDER_CATEGORIES', 'category', 'all', 'Re-ordered support categories.');
    return res.json({ success: true });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.post('/api/categories', authenticateToken, requireRoles(['admin', 'editor']), async (req, res) => {
  const { id, slug, pillar, icon, accentToken, translations } = req.body;
  if (!id || !slug) return res.status(400).json({ error: 'ID and slug are required.' });
  try {
    const category = await prisma.category.create({
      data: {
        id,
        slug,
        pillar,
        icon: icon || 'HelpCircle',
        accentToken: accentToken || 'mint',
        displayOrder: 99,
        translations: {
          create: translations.map(t => ({
            locale: t.locale,
            name: t.name,
            description: t.description
          }))
        }
      },
      include: { translations: true }
    });
    await logAudit(req.user, 'CREATE_CATEGORY', 'category', id, `Created category: ${slug}`);
    return res.json(category);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.put('/api/categories/:id', authenticateToken, requireRoles(['admin', 'editor']), async (req, res) => {
  const { id } = req.params;
  const { slug, pillar, icon, accentToken, translations } = req.body;
  try {
    await prisma.categoryTranslation.deleteMany({ where: { categoryId: id } });

    const updated = await prisma.category.update({
      where: { id },
      data: {
        slug,
        pillar,
        icon,
        accentToken,
        translations: {
          create: translations.map(t => ({
            locale: t.locale,
            name: t.name,
            description: t.description
          }))
        }
      },
      include: { translations: true }
    });
    await logAudit(req.user, 'UPDATE_CATEGORY', 'category', id, `Updated category: ${slug}`);
    return res.json(updated);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.delete('/api/categories/:id', authenticateToken, requireRoles(['admin']), async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.category.delete({ where: { id } });
    await logAudit(req.user, 'DELETE_CATEGORY', 'category', id, `Deleted category: ${id}`);
    return res.json({ success: true });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

// ----------------------------------------------------
// TASK SHORTCUTS ENDPOINTS
// ----------------------------------------------------

app.get('/api/shortcuts', async (req, res) => {
  try {
    const shortcuts = await prisma.taskShortcut.findMany({
      orderBy: { displayOrder: 'asc' },
      include: { translations: true, article: true }
    });
    return res.json(shortcuts);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.put('/api/shortcuts/reorder', authenticateToken, requireRoles(['admin', 'editor']), async (req, res) => {
  const { orders } = req.body; // Array of { id, displayOrder }
  try {
    for (const item of orders) {
      await prisma.taskShortcut.update({
        where: { id: item.id },
        data: { displayOrder: item.displayOrder }
      });
    }
    await logAudit(req.user, 'REORDER_SHORTCUTS', 'shortcut', 'all', 'Re-ordered shortcuts.');
    return res.json({ success: true });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.post('/api/shortcuts', authenticateToken, requireRoles(['admin', 'editor']), async (req, res) => {
  const { targetArticleId, icon, translations } = req.body;
  try {
    const shortcut = await prisma.taskShortcut.create({
      data: {
        targetArticleId: parseInt(targetArticleId),
        icon: icon || 'HelpCircle',
        displayOrder: 99,
        translations: {
          create: translations.map(t => ({
            locale: t.locale,
            label: t.label
          }))
        }
      },
      include: { translations: true }
    });
    await logAudit(req.user, 'CREATE_SHORTCUT', 'shortcut', shortcut.id, `Created shortcut targeting article ${targetArticleId}`);
    return res.json(shortcut);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.put('/api/shortcuts/:id', authenticateToken, requireRoles(['admin', 'editor']), async (req, res) => {
  const { id } = req.params;
  const { targetArticleId, icon, translations } = req.body;
  try {
    await prisma.taskShortcutTranslation.deleteMany({ where: { taskShortcutId: parseInt(id) } });

    const updated = await prisma.taskShortcut.update({
      where: { id: parseInt(id) },
      data: {
        targetArticleId: parseInt(targetArticleId),
        icon: icon || 'HelpCircle',
        translations: {
          create: translations.map(t => ({
            locale: t.locale,
            label: t.label
          }))
        }
      },
      include: { translations: true }
    });
    await logAudit(req.user, 'UPDATE_SHORTCUT', 'shortcut', id, `Updated shortcut: ${id}`);
    return res.json(updated);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.delete('/api/shortcuts/:id', authenticateToken, requireRoles(['admin']), async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.taskShortcut.delete({ where: { id: parseInt(id) } });
    await logAudit(req.user, 'DELETE_SHORTCUT', 'shortcut', id, `Deleted shortcut: ${id}`);
    return res.json({ success: true });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

// ----------------------------------------------------
// MEDIA LIBRARY ENDPOINTS (Safe Base64 Asset Writer)
// ----------------------------------------------------

app.get('/api/media', async (req, res) => {
  try {
    const assets = await prisma.mediaAsset.findMany({
      include: { translations: true }
    });
    return res.json(assets);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.post('/api/media/upload', authenticateToken, requireRoles(['admin', 'editor']), async (req, res) => {
  const { filename, base64Data, translations } = req.body;
  if (!filename || !base64Data || !translations) {
    return res.status(400).json({ error: 'Filename, base64Data, and translation alt-texts are required.' });
  }

  // Enforce alt-text validation (no alt texts, no save)
  const missingAlt = translations.some(t => !t.altText || t.altText.trim() === '');
  if (missingAlt) {
    return res.status(400).json({ error: 'All media uploads must provide a descriptive alt-text per supported language (EN, FA, AR).' });
  }

  try {
    // Clean file naming mapping
    const cleanName = `${Date.now()}_${filename.replace(/\s+/g, '_')}`;
    const filePath = path.join(UPLOADS_DIR, cleanName);
    
    // Decode base64 buffer write
    const buffer = Buffer.from(base64Data, 'base64');
    fs.writeFileSync(filePath, buffer);

    const assetUrl = `/uploads/${cleanName}`;
    const asset = await prisma.mediaAsset.create({
      data: {
        filename: cleanName,
        url: assetUrl,
        uploadedBy: req.user.email,
        translations: {
          create: translations.map(t => ({
            locale: t.locale,
            altText: t.altText
          }))
        }
      },
      include: { translations: true }
    });

    await logAudit(req.user, 'UPLOAD_MEDIA', 'media', asset.id, `Uploaded file: ${cleanName}`);
    return res.json(asset);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.delete('/api/media/:id', authenticateToken, requireRoles(['admin']), async (req, res) => {
  const { id } = req.params;
  try {
    const asset = await prisma.mediaAsset.findUnique({ where: { id: parseInt(id) } });
    if (!asset) return res.status(404).json({ error: 'Media asset not found.' });

    // Usage check (prevent orphan deletion if still in use by checking public articles body text)
    const articles = await prisma.articleTranslation.findMany();
    const isReferenced = articles.some(art => art.content.includes(asset.url) || art.seoOgImage === asset.url);
    if (isReferenced) {
      return res.status(400).json({ error: 'Cannot delete: Media asset is currently referenced by one or more articles.' });
    }

    // Delete local file
    const filePath = path.join(UPLOADS_DIR, asset.filename);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    await prisma.mediaAsset.delete({ where: { id: parseInt(id) } });
    await logAudit(req.user, 'DELETE_MEDIA', 'media', id, `Deleted file: ${asset.filename}`);
    return res.json({ success: true });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

// ----------------------------------------------------
// INCIDENTS, STATUS & SYSTEM DIAGNOSTICS ENDPOINTS
// ----------------------------------------------------

app.get('/api/status', async (req, res) => {
  try {
    const nodes = await prisma.serviceNode.findMany();
    const incidents = await prisma.incident.findMany({
      orderBy: { startedAt: 'desc' }
    });
    return res.json({ nodes, incidents });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.post('/api/incidents', authenticateToken, requireRoles(['admin', 'editor']), async (req, res) => {
  const { title, status, startedAt, updates } = req.body;
  if (!title || !status) return res.status(400).json({ error: 'Title and status are required.' });
  try {
    const incident = await prisma.incident.create({
      data: {
        title,
        status,
        startedAt: startedAt ? new Date(startedAt) : new Date(),
        updates: JSON.stringify(updates || [])
      }
    });
    await logAudit(req.user, 'CREATE_INCIDENT', 'incident', incident.id, `Incident logs registered: ${title}`);
    return res.json(incident);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.put('/api/incidents/:id', authenticateToken, requireRoles(['admin', 'editor']), async (req, res) => {
  const { id } = req.params;
  const { title, status, resolvedAt, updates } = req.body;
  try {
    const updated = await prisma.incident.update({
      where: { id: parseInt(id) },
      data: {
        title,
        status,
        resolvedAt: resolvedAt ? new Date(resolvedAt) : (status === 'resolved' ? new Date() : null),
        updates: JSON.stringify(updates || [])
      }
    });
    await logAudit(req.user, 'UPDATE_INCIDENT', 'incident', id, `Incident status updated: ${status}`);
    return res.json(updated);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

// Node diagnostics updates
app.put('/api/status/nodes/:id', authenticateToken, requireRoles(['admin']), async (req, res) => {
  const { id } = req.params;
  const { latency, status } = req.body;
  try {
    const updated = await prisma.serviceNode.update({
      where: { id: parseInt(id) },
      data: { latency, status }
    });
    return res.json(updated);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

// ----------------------------------------------------
// SUPPORT SETTINGS (SLAs) ENDPOINTS
// ----------------------------------------------------

app.get('/api/settings', async (req, res) => {
  try {
    let settings = await prisma.supportSettings.findUnique({ where: { id: 1 } });
    if (!settings) {
      settings = await prisma.supportSettings.create({
        data: { id: 1, slaChatMinutes: 2, slaEmailHours: 2 }
      });
    }
    return res.json(settings);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.put('/api/settings', authenticateToken, requireRoles(['admin']), async (req, res) => {
  const { slaChatMinutes, slaEmailHours } = req.body;
  try {
    const updated = await prisma.supportSettings.update({
      where: { id: 1 },
      data: {
        slaChatMinutes: parseInt(slaChatMinutes),
        slaEmailHours: parseInt(slaEmailHours)
      }
    });
    await logAudit(req.user, 'UPDATE_SLAS', 'settings', 1, `SLAs set: Chat ${slaChatMinutes}m, Email ${slaEmailHours}h`);
    return res.json(updated);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

// ----------------------------------------------------
// DISPUTES ENDPOINTS
// ----------------------------------------------------

app.get('/api/disputes', authenticateToken, requireRoles(['admin', 'editor', 'compliance_reviewer']), async (req, res) => {
  try {
    const disputes = await prisma.disputeTicket.findMany({
      orderBy: { submittedAt: 'desc' }
    });
    return res.json(disputes);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.post('/api/disputes', async (req, res) => {
  const { accountRef, tradeTicketId, notes } = req.body;
  if (!accountRef || !tradeTicketId) {
    return res.status(400).json({ error: 'Account reference and trade ticket ID are required.' });
  }
  try {
    // Enforce 48 hours resolution target SLA limit
    const targetAt = new Date();
    targetAt.setHours(targetAt.getHours() + 48);

    const historyLog = [{
      user: 'Client Portal',
      stage: 'submitted',
      outcome: null,
      timestamp: new Date().toISOString()
    }];

    const dispute = await prisma.disputeTicket.create({
      data: {
        accountRef,
        tradeTicketId,
        stage: 'submitted',
        notes: notes || '',
        slaTargetAt: targetAt,
        history: JSON.stringify(historyLog)
      }
    });

    await logAudit(null, 'SUBMIT_DISPUTE', 'dispute', dispute.id, `New dispute submitted: Account ${accountRef}, Trade ID ${tradeTicketId}`);
    return res.json(dispute);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.put('/api/disputes/:id', authenticateToken, requireRoles(['admin', 'editor', 'compliance_reviewer']), async (req, res) => {
  const { id } = req.params;
  const { stage, outcome, notes } = req.body;
  try {
    const old = await prisma.disputeTicket.findUnique({ where: { id: parseInt(id) } });
    if (!old) return res.status(404).json({ error: 'Ticket not found.' });

    const auditTrail = JSON.parse(old.history || '[]');
    if (stage !== old.stage || outcome !== old.outcome) {
      auditTrail.push({
        user: req.user.email,
        stage: stage || old.stage,
        outcome: outcome !== undefined ? outcome : old.outcome,
        timestamp: new Date().toISOString()
      });
    }

    const updated = await prisma.disputeTicket.update({
      where: { id: parseInt(id) },
      data: {
        stage: stage || old.stage,
        outcome: outcome !== undefined ? outcome : old.outcome,
        notes: notes !== undefined ? notes : old.notes,
        history: JSON.stringify(auditTrail)
      }
    });

    await logAudit(req.user, 'UPDATE_DISPUTE', 'dispute', id, `Updated dispute status: stage=${stage}, outcome=${outcome}`);
    return res.json(updated);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

// ----------------------------------------------------
// FEEDBACK & SEARCH GAP LOGGING ENDPOINTS
// ----------------------------------------------------

app.post('/api/feedback', async (req, res) => {
  const { articleId, locale, helpful } = req.body;
  if (!articleId || !locale) return res.status(400).json({ error: 'Article ID and locale are required.' });
  try {
    const feedback = await prisma.feedbackEvent.create({
      data: {
        articleId: parseInt(articleId),
        locale,
        helpful: !!helpful
      }
    });
    return res.json(feedback);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.get('/api/feedback/stats', authenticateToken, requireRoles(['admin', 'editor']), async (req, res) => {
  try {
    const stats = await prisma.feedbackEvent.groupBy({
      by: ['articleId', 'helpful'],
      _count: {
        helpful: true
      }
    });

    // Format stats by articles
    const formatted = {};
    for (const item of stats) {
      if (!formatted[item.articleId]) {
        formatted[item.articleId] = { helpful: 0, unhelpful: 0 };
      }
      if (item.helpful) {
        formatted[item.articleId].helpful = item._count.helpful;
      } else {
        formatted[item.articleId].unhelpful = item._count.helpful;
      }
    }
    return res.json(formatted);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.post('/api/search-logs', async (req, res) => {
  const { queryText, locale, resultCount } = req.body;
  if (!queryText || !locale) return res.status(400).json({ error: 'Query text and locale are required.' });
  try {
    const searchLog = await prisma.searchQueryLog.create({
      data: {
        queryText: queryText.trim(),
        locale,
        resultCount: parseInt(resultCount)
      }
    });
    return res.json(searchLog);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.get('/api/search-logs', authenticateToken, requireRoles(['admin', 'editor']), async (req, res) => {
  try {
    const logs = await prisma.searchQueryLog.findMany({
      orderBy: { timestamp: 'desc' }
    });
    return res.json(logs);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

// ----------------------------------------------------
// REDIRECT MANAGER & SEO TOOLS ENDPOINTS
// ----------------------------------------------------

app.get('/api/seo/redirects', authenticateToken, requireRoles(['admin', 'editor']), async (req, res) => {
  try {
    const redirects = await prisma.redirect.findMany();
    return res.json(redirects);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.post('/api/seo/redirects', authenticateToken, requireRoles(['admin', 'editor']), async (req, res) => {
  const { oldSlug, newSlug } = req.body;
  if (!oldSlug || !newSlug) return res.status(400).json({ error: 'Old slug and new slug are required.' });
  try {
    const rule = await prisma.redirect.upsert({
      where: { oldSlug },
      update: { newSlug },
      create: { oldSlug, newSlug }
    });
    await logAudit(req.user, 'CREATE_REDIRECT', 'seo', rule.id, `Redirect created: ${oldSlug} -> ${newSlug}`);
    return res.json(rule);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.delete('/api/seo/redirects/:id', authenticateToken, requireRoles(['admin']), async (req, res) => {
  const { id } = req.params;
  try {
    const rule = await prisma.redirect.findUnique({ where: { id: parseInt(id) } });
    if (!rule) return res.status(404).json({ error: 'Redirect rule not found.' });

    await prisma.redirect.delete({ where: { id: parseInt(id) } });
    await logAudit(req.user, 'DELETE_REDIRECT', 'seo', id, `Redirect deleted: ${rule.oldSlug}`);
    return res.json({ success: true });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

// robots.txt manager
app.get('/api/seo/robots', async (req, res) => {
  const robotsPath = path.join(__dirname, '../public/robots.txt');
  try {
    let content = 'User-agent: *\nDisallow: /admin/\nSitemap: http://localhost:5173/sitemap.xml\n';
    if (fs.existsSync(robotsPath)) {
      content = fs.readFileSync(robotsPath, 'utf8');
    }
    return res.json({ content });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.put('/api/seo/robots', authenticateToken, requireRoles(['admin']), async (req, res) => {
  const { content } = req.body;
  const robotsPath = path.join(__dirname, '../public/robots.txt');
  try {
    fs.writeFileSync(robotsPath, content || '');
    await logAudit(req.user, 'UPDATE_ROBOTS', 'seo', 'robots', 'Updated robots.txt configuration.');
    return res.json({ success: true });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

// ----------------------------------------------------
// USERS & AUDIT TRAILS ENDPOINTS
// ----------------------------------------------------

app.get('/api/users', authenticateToken, requireRoles(['admin']), async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, name: true, email: true, role: true, mustChangePassword: true, createdAt: true }
    });
    return res.json(users);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.post('/api/users', authenticateToken, requireRoles(['admin']), async (req, res) => {
  const { name, email, role, password } = req.body;
  if (!name || !email || !role || !password) {
    return res.status(400).json({ error: 'Name, email, role, and password are required.' });
  }
  try {
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return res.status(400).json({ error: 'Email already registered.' });

    const hash = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        role,
        passwordHash: hash,
        mustChangePassword: true
      }
    });

    await logAudit(req.user, 'CREATE_USER', 'user', newUser.id, `Created user panel account: ${email} (${role})`);
    return res.json({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      mustChangePassword: newUser.mustChangePassword
    });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.delete('/api/users/:id', authenticateToken, requireRoles(['admin']), async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
    if (!user) return res.status(404).json({ error: 'User not found.' });

    // Block deleting self
    if (user.id === req.user.id) {
      return res.status(400).json({ error: 'You cannot delete your own administrative account.' });
    }

    await prisma.user.delete({ where: { id: parseInt(id) } });
    await logAudit(req.user, 'DELETE_USER', 'user', id, `Deleted user account: ${user.email}`);
    return res.json({ success: true });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.get('/api/audit-logs', authenticateToken, requireRoles(['admin', 'editor']), async (req, res) => {
  try {
    const logs = await prisma.auditLog.findMany({
      orderBy: { timestamp: 'desc' }
    });
    return res.json(logs);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.listen(PORT, () => {
  console.log(`WingoMarkets Help Center CMS API running on port ${PORT}`);
});
