import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { supportCategories, academyCategories } from '../../src/data/categories.js';
import { taskShortcuts } from '../../src/data/shortcuts.js';
import { articles } from '../../src/data/articles.js';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // 1. Create default support settings
  await prisma.supportSettings.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      slaChatMinutes: 2,
      slaEmailHours: 2,
    },
  });

  // 2. Create service nodes (operational state)
  const defaultNodes = [
    { nameKey: 'server_name_mt5_eu', latency: '14 ms', status: 'operational' },
    { nameKey: 'server_name_mt5_asia', latency: '28 ms', status: 'operational' },
    { nameKey: 'server_name_price_feed', latency: '2 ms', status: 'operational' },
    { nameKey: 'server_name_client_portal', latency: '42 ms', status: 'operational' },
    { nameKey: 'server_name_payment_gate', latency: '12 ms', status: 'operational' },
  ];
  for (const node of defaultNodes) {
    await prisma.serviceNode.upsert({
      where: { nameKey: node.nameKey },
      update: {},
      create: node,
    });
  }

  // 3. Create default incidents
  const defaultIncidents = [
    {
      title: 'incident_latency_title',
      status: 'resolved',
      startedAt: new Date('2026-06-28T10:00:00Z'),
      resolvedAt: new Date('2026-06-28T12:00:00Z'),
      updates: JSON.stringify([
        { timestamp: '2026-06-28T10:00:00Z', message: 'Investigating network latency on MT5 EU nodes.' },
        { timestamp: '2026-06-28T12:00:00Z', message: 'Resolved network routing anomalies. Uptime fully restored.' }
      ])
    },
    {
      title: 'incident_db_title',
      status: 'resolved',
      startedAt: new Date('2026-05-14T08:00:00Z'),
      resolvedAt: new Date('2026-05-14T09:30:00Z'),
      updates: JSON.stringify([
        { timestamp: '2026-05-14T08:00:00Z', message: 'Database maintenance scheduled for Client Portal backend.' },
        { timestamp: '2026-05-14T09:30:00Z', message: 'Maintenance completed successfully.' }
      ])
    },
    {
      title: 'incident_pay_title',
      status: 'resolved',
      startedAt: new Date('2026-04-02T15:00:00Z'),
      resolvedAt: new Date('2026-04-02T16:15:00Z'),
      updates: JSON.stringify([
        { timestamp: '2026-04-02T15:00:00Z', message: 'Volet gateway experiencing minor delays processing CAD withdrawals.' },
        { timestamp: '2026-04-02T16:15:00Z', message: 'Volet API communication normalized.' }
      ])
    }
  ];
  for (const inc of defaultIncidents) {
    await prisma.incident.create({
      data: inc
    });
  }

  // 4. Create default users: admin, editor, translator, compliance_reviewer
  const adminPassword = crypto.randomBytes(8).toString('hex'); // random 16 character hex password
  const editorPassword = 'editorPassword123!';
  const translatorPassword = 'translatorPassword123!';
  const compliancePassword = 'compliancePassword123!';

  const adminHash = await bcrypt.hash(adminPassword, 10);
  const editorHash = await bcrypt.hash(editorPassword, 10);
  const translatorHash = await bcrypt.hash(translatorPassword, 10);
  const complianceHash = await bcrypt.hash(compliancePassword, 10);

  const users = [
    { name: 'System Admin', email: 'admin@wingomarkets.com', role: 'admin', passwordHash: adminHash, mustChangePassword: true },
    { name: 'Content Editor', email: 'editor@wingomarkets.com', role: 'editor', passwordHash: editorHash, mustChangePassword: false },
    { name: 'Translator FA/AR', email: 'translator@wingomarkets.com', role: 'translator', passwordHash: translatorHash, mustChangePassword: false },
    { name: 'Compliance Reviewer', email: 'compliance@wingomarkets.com', role: 'compliance_reviewer', passwordHash: complianceHash, mustChangePassword: false },
  ];

  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: user,
    });
  }

  console.log('==================================================');
  console.log('SEED CREDENTIALS:');
  console.log(`Admin User: admin@wingomarkets.com`);
  console.log(`Admin Temp Password: ${adminPassword}`);
  console.log('==================================================');

  // 5. Seed categories
  const categoriesList = [
    ...supportCategories.map(c => ({ ...c, pillar: 'help-center' })),
    ...academyCategories.map(c => ({ ...c, pillar: 'academy' }))
  ];

  for (let i = 0; i < categoriesList.length; i++) {
    const cat = categoriesList[i];
    await prisma.category.upsert({
      where: { id: cat.id },
      update: {},
      create: {
        id: cat.id,
        slug: cat.slug,
        pillar: cat.pillar,
        icon: cat.icon || 'HelpCircle',
        accentToken: cat.accent_token || 'mint',
        displayOrder: i,
        translations: {
          create: [
            { locale: 'en', name: cat.title.en, description: cat.description.en },
            { locale: 'fa', name: cat.title.fa, description: cat.description.fa },
            { locale: 'ar', name: cat.title.ar, description: cat.description.ar },
          ]
        }
      }
    });
  }

  // 6. Seed articles
  const articleSlugToId = {};
  for (const art of articles) {
    const category = categoriesList.find(c => c.slug === art.categorySlug);
    const categoryId = category ? category.id : 'account-profile';

    const dbArticle = await prisma.article.create({
      data: {
        slug: art.slug,
        categoryId: categoryId,
        pillar: art.pillar || 'help-center',
        templateType: art.template || 'A',
        regionVariant: art.region || 'global',
        status: 'published',
        relatedArticleIds: JSON.stringify(art.relatedSlugs || art.relatedArticleIds || []),
        complianceRequired: ['C', 'D'].includes(art.template),
        complianceSignedOffBy: ['C', 'D'].includes(art.template) ? 'compliance@wingomarkets.com' : null,
        complianceSignedOffAt: ['C', 'D'].includes(art.template) ? new Date() : null,
        translations: {
          create: ['en', 'fa', 'ar'].map(loc => {
            const locContent = art.content?.[loc] || {};
            const summary = locContent.summary || '';
            
            // Build template-specific content structure
            const contentBody = {
              prerequisites: locContent.prerequisites || [],
              steps_web: locContent.stepsWeb || [],
              steps_mobile: locContent.stepsMobile || [],
              edge_cases: locContent.edgeCases || [],
              // For Template B
              stakes_statement: locContent.stakesStatement || art.stakesStatement || '',
              explanation_sections: locContent.explanationSections || [],
              numeric_example: locContent.numericExample || null,
              myth_fact_pairs: locContent.mythFactPairs || [],
              // For Template C
              plain_summary: locContent.plainSummary || '',
              detail_sections: locContent.detailSections || [],
              regulatory_note_box: locContent.regulatoryNoteBox || '',
              // For Template D
              urgency_badge_text: locContent.urgencyBadgeText || '',
              do_this_first: locContent.doThisFirst || null,
              evidence_checklist: locContent.evidenceChecklist || [],
              timeline_nodes: locContent.timelineNodes || [],
              outcome_cards: locContent.outcomeCards || []
            };

            return {
              locale: loc,
              title: art.title?.[loc] || '',
              description: art.description?.[loc] || '',
              summary: summary,
              content: JSON.stringify(contentBody),
              seoMetaTitle: art.title?.[loc] || '',
              seoMetaDescription: art.description?.[loc] || '',
              translationStatus: 'published'
            };
          })
        }
      }
    });

    articleSlugToId[art.slug] = dbArticle.id;
  }

  // 7. Seed shortcuts
  for (let i = 0; i < taskShortcuts.length; i++) {
    const sc = taskShortcuts[i];
    const targetId = articleSlugToId[sc.targetSlug];
    if (targetId) {
      await prisma.taskShortcut.create({
        data: {
          targetArticleId: targetId,
          icon: sc.icon || 'HelpCircle',
          displayOrder: i,
          translations: {
            create: [
              { locale: 'en', label: sc.title.en },
              { locale: 'fa', label: sc.title.fa },
              { locale: 'ar', label: sc.title.ar },
            ]
          }
        }
      });
    }
  }

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
