// Add completed projects here. Each entry supports title, category, description,
// tools (an array), and optional url. All visitors see these published entries.
const projects = [{
  title: 'Credit Default Risk & Review Prioritization',
  category: '01 / FINANCE & PREDICTIVE ANALYTICS',
  description: 'Analyzed 30,000 credit-card customers to prioritize limited account-review resources. Reviewing the highest-risk 10% captured 31.7% of test defaults; a simple repayment rule captured 31.5%. Compared models, validated probabilities, and explored hypothetical financial impact.',
  tools: ['Python', 'Pandas', 'scikit-learn', 'Credit Risk', 'Financial Analysis'],
  url: 'https://github.com/alexsobrre/credit-default-risk-analysis'
}, {
  title: 'Formula 1 Podium Forecast',
  category: '02 / SPORTS & PREDICTIVE DATA SCIENCE',
  description: 'Used FastF1 data from 190 races to test podium forecasts against driver and team form. Random forest averaged 1.96 correct podium picks out of three in 2025 versus 1.71 for recent form, with weaker performance in 2026. Includes chronological backtests and a dated next-race forecast.',
  tools: ['Python', 'FastF1', 'scikit-learn', 'Forecasting', 'Data Visualization'],
  url: 'https://github.com/alexsobrre/f1-race-forecast'
}, {
  title: 'Revenue Quality & Customer Concentration',
  category: '03 / FINANCE & SQL BUSINESS ANALYSIS',
  description: 'Used DuckDB SQL to reconcile 541,909 transaction lines into £9.77M net recorded sales. Explained volume-led growth, cancellation adjustments, customer concentration, and repeat purchasing, with auditable definitions and nine integrity checks.',
  tools: ['SQL', 'DuckDB', 'Financial Analysis', 'Window Functions', 'Data Validation'],
  url: 'https://github.com/alexsobrre/revenue-quality-sql'
}];
const grid = document.getElementById('project-grid');
if (projects.length) document.getElementById('empty-projects').hidden = true;
projects.forEach(project => {
  const card = document.createElement('article'); card.className = 'project-card';
  const category = document.createElement('span'); category.className = 'project-number'; category.textContent = project.category;
  const title = document.createElement('h3'); title.textContent = project.title;
  const description = document.createElement('p'); description.textContent = project.description;
  const tags = document.createElement('div'); tags.className = 'tags';
  (project.tools || []).forEach(tool => { const tag = document.createElement('span'); tag.textContent = tool; tags.append(tag); });
  card.append(category, title, description, tags);
  if (project.url && /^https?:\/\//.test(project.url)) { const link = document.createElement('a'); link.className = 'button'; link.style.marginTop = '20px'; link.href = project.url; link.target = '_blank'; link.rel = 'noopener'; link.textContent = 'Explore project ↗'; card.append(link); }
  grid.append(card);
});
const sections = document.querySelectorAll('main section');
const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { document.querySelectorAll('nav a').forEach(link => link.classList.toggle('active', link.hash === '#' + entry.target.id)); } }); }, { rootMargin: '-15% 0px -60% 0px' });
sections.forEach(section => observer.observe(section));
