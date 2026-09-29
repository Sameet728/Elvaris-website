const fs = require('fs');

let content = fs.readFileSync('src/data/content.ts', 'utf8');

const blogPostsMatch = content.match(/export const blogPosts = (\[.*?\]);/s);
const researchAreasMatch = content.match(/export const researchAreas = (\[.*?\]);/s);

let blogPosts, researchAreas;
eval('blogPosts = ' + blogPostsMatch[1]);
eval('researchAreas = ' + researchAreasMatch[1]);

const updates = {
  'quantitative-research': researchAreas.find(a => a.slug === 'quantitative-research'),
  'strategy-research': researchAreas.find(a => a.slug === 'strategy-research'),
  'market-data-research': researchAreas.find(a => a.slug === 'market-data'),
  'machine-learning': researchAreas.find(a => a.slug === 'artificial-intelligence'),
  'statistical-validation': researchAreas.find(a => a.slug === 'validation'),
  'research-pipeline': researchAreas.find(a => a.slug === 'research-infrastructure'),
  'walk-forward-testing': blogPosts.find(b => b.slug === 'walk-forward-testing-explained'),
  'out-of-sample-testing': blogPosts.find(b => b.slug === 'why-out-of-sample-testing-matters'),
  'feature-engineering': blogPosts.find(b => b.slug === 'feature-engineering-for-time-series'),
  'risk-metrics': blogPosts.find(b => b.slug === 'understanding-maximum-drawdown'),
  'maximum-drawdown': blogPosts.find(b => b.slug === 'understanding-maximum-drawdown'),
  'overfitting': blogPosts.find(b => b.slug === 'overfitting-in-strategy-development'),
  'lookahead-bias': blogPosts.find(b => b.slug === 'understanding-lookahead-bias'),
  'backtesting': blogPosts.find(b => b.slug === 'why-backtests-fail'),
};

for (const [slug, data] of Object.entries(updates)) {
  if (!data) continue;
  
  let newContent = '';
  let newToc = [];
  
  if (data.sections) {
    // Research Area
    newToc = [
      { id: 'why-it-matters', title: 'Why It Matters', level: 2 },
      { id: 'research-questions', title: 'Research Questions', level: 2 },
      { id: 'methods', title: 'Methods', level: 2 },
      { id: 'experiments', title: 'Experiments', level: 2 },
      { id: 'validation', title: 'Validation', level: 2 }
    ];
    newContent = `## Why It Matters\n\n${data.sections.whyItMatters}\n\n## Research Questions\n\n${data.sections.researchQuestions.map(q => '- ' + q).join('\n')}\n\n## Methods\n\n${data.sections.methods.map(m => '- ' + m).join('\n')}\n\n## Experiments\n\n${data.sections.experiments}\n\n## Validation\n\n${data.sections.validation}`;
  } else if (data.content) {
    // Blog Post
    newContent = data.content;
    const tocMatches = [...newContent.matchAll(/## ([^\n]+)/g)];
    newToc = tocMatches.map(m => ({ id: m[1].toLowerCase().replace(/[^a-z0-9]+/g, '-'), title: m[1], level: 2 }));
  }

  const regex = new RegExp(`('${slug}'|${slug}): \\{([\\s\\S]*?)content: \\\`([\\s\\S]*?)\\\`\n  \\},`, 'g');
  content = content.replace(regex, (match, p1, p2, p3) => {
     let updatedP2 = p2;
     if (newToc.length > 0) {
       // Serialize TOC correctly matching TypeScript format
       const stringifiedToc = JSON.stringify(newToc).replace(/"([^"]+)":/g, '$1:').replace(/"/g, "'");
       updatedP2 = p2.replace(/tableOfContents: \\[[\\s\\S]*?\\],/, 'tableOfContents: ' + stringifiedToc + ',');
     }
     return `${p1}: {${updatedP2}content: \`${newContent}\`\n  },`;
  });
}

fs.writeFileSync('src/data/content.ts', content, 'utf8');
console.log('Successfully updated content.ts');
