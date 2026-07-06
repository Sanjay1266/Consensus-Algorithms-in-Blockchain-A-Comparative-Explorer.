import {
  ALGORITHMS, BLOCKCHAINS, SMART_CONTRACTS, LAYER_DATA,
  TIMELINE_EVENTS, QUIZ_QUESTIONS, GLOSSARY, REFERENCES
} from './data.js';

let currentAlgorithm = 'pow';
let radarChart = null;
let sortColumn = null;
let sortDirection = 'asc';
let quizState = { questions: [], currentIndex: 0, score: 0, answered: false };
const algoMap = Object.fromEntries(ALGORITHMS.map(a => [a.id, a]));

document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  initHero();
  initBlockchainBackground();
  initScrollReveal();
  initCounters();
  initGlossary();
  initReferences();
  initTimeline();
  initComparisonTable();
  initHeatmap();
  initQuiz();
  initMobileMenu();
  selectAlgorithm('pow');
});

function selectAlgorithm(id) {
  currentAlgorithm = id;
  const algo = algoMap[id];
  if (!algo) return;
  document.querySelectorAll('.algo-nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.id === id);
    btn.setAttribute('aria-current', btn.dataset.id === id ? 'true' : 'false');
  });
  renderOverview(algo);
  renderTrilemma(algo);
  renderBlockchainCards(id);
  renderSmartContracts(id);
  renderLayerDiagram(id);
  highlightComparisonRow(id);
  highlightTimeline(id);
  updateMatrixFilter(id);
}

function initSidebar() {
  const nav = document.getElementById('algorithmNav');
  nav.innerHTML = ALGORITHMS.map(algo => `
    <button class="algo-nav-item" data-id="${algo.id}" aria-label="Select ${algo.name}">
      <span class="algo-icon" style="background:${algo.color}22;color:${algo.color}">${algo.abbr}</span>
      <span>${algo.name}</span>
    </button>`).join('');
  nav.addEventListener('click', e => {
    const btn = e.target.closest('.algo-nav-item');
    if (btn) selectAlgorithm(btn.dataset.id);
  });
}

function initHero() {
  document.getElementById('exploreBtn')?.addEventListener('click', () => {
    document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('learnBtn')?.addEventListener('click', () => {
    document.getElementById('glossary')?.scrollIntoView({ behavior: 'smooth' });
  });
}

function renderOverview(algo) {
  const container = document.getElementById('overviewContent');
  const energyClass = `energy-${algo.energyLevel}`;
  container.innerHTML = `
    <div class="overview-card full-width fade-update">
      <h3><i class="fas fa-info-circle"></i> ${algo.name}</h3>
      <div class="overview-meta">
        <div class="meta-item"><div class="meta-label">Inventor</div><div class="meta-value">${algo.inventor}</div></div>
        <div class="meta-item"><div class="meta-label">Year Introduced</div><div class="meta-value">${algo.year}</div></div>
        <div class="meta-item"><div class="meta-label">Category</div><div class="meta-value">${algo.category}</div></div>
        <div class="meta-item"><div class="meta-label">Network Type</div><div class="meta-value">${algo.permissionType}</div></div>
        <div class="meta-item"><div class="meta-label">Energy Consumption</div><div class="meta-value"><span class="energy-badge ${energyClass}"><i class="fas fa-bolt"></i> ${algo.energyLabel}</span></div></div>
        <div class="meta-item"><div class="meta-label">Core Principle</div><div class="meta-value">${algo.principle}</div></div>
      </div>
    </div>
    <div class="overview-card fade-update">
      <h3><i class="fas fa-book-open"></i> Detailed Explanation</h3>
      <p style="color:var(--text-secondary);font-size:0.95rem;line-height:1.7;white-space:pre-line">${algo.explanation}</p>
    </div>
    <div class="overview-card fade-update">
      <h3><i class="fas fa-list-ol"></i> Step-by-Step Working</h3>
      <ul class="list-items list-steps">${algo.steps.map(s => `<li>${s}</li>`).join('')}</ul>
    </div>
    <div class="overview-card fade-update">
      <h3><i class="fas fa-thumbs-up"></i> Advantages</h3>
      <ul class="list-items list-advantages">${algo.advantages.map(a => `<li>${a}</li>`).join('')}</ul>
    </div>
    <div class="overview-card fade-update">
      <h3><i class="fas fa-thumbs-down"></i> Disadvantages</h3>
      <ul class="list-items list-disadvantages">${algo.disadvantages.map(d => `<li>${d}</li>`).join('')}</ul>
    </div>
    <div class="overview-card fade-update">
      <h3><i class="fas fa-briefcase"></i> Typical Use Cases</h3>
      <ul class="list-items list-usecases">${algo.useCases.map(u => `<li>${u}</li>`).join('')}</ul>
    </div>
    <div class="overview-card full-width fade-update">
      <h3><i class="fas fa-project-diagram"></i> Visual Workflow</h3>
      <div class="workflow-diagram">${algo.workflow.map((step, i) => `
        ${i > 0 ? '<span class="workflow-arrow"><i class="fas fa-arrow-right"></i></span>' : ''}
        <div class="workflow-step"><i class="fas ${step.icon}"></i><span>${step.label}</span></div>`).join('')}
      </div>
    </div>
    <div class="overview-card full-width fade-update">
      <h3><i class="fas fa-cubes"></i> Block Validation Animation</h3>
      <div class="validation-animation" id="validationAnim">${[1,2,3,4,5].map(n => `
        <div class="block-node" data-block="${n}">#${n}</div>${n < 5 ? '<div class="block-chain-link"></div>' : ''}`).join('')}
      </div>
    </div>`;
  startValidationAnimation();
}

function startValidationAnimation() {
  const nodes = document.querySelectorAll('#validationAnim .block-node');
  let idx = 0;
  const animate = () => {
    nodes.forEach((n, i) => {
      n.classList.remove('validating', 'validated');
      if (i < idx) n.classList.add('validated');
      else if (i === idx) n.classList.add('validating');
    });
    idx = (idx + 1) % (nodes.length + 1);
  };
  animate();
  if (window._validationInterval) clearInterval(window._validationInterval);
  window._validationInterval = setInterval(animate, 1200);
}

function renderTrilemma(algo) {
  renderRadarChart(algo);
  renderMetrics(algo);
}

function renderRadarChart(algo) {
  const ctx = document.getElementById('radarChart');
  if (!ctx) return;
  if (radarChart) radarChart.destroy();
  radarChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Scalability', 'Security', 'Decentralization'],
      datasets: [{
        label: algo.name,
        data: [algo.trilemma.scalability, algo.trilemma.security, algo.trilemma.decentralization],
        backgroundColor: algo.color + '33',
        borderColor: algo.color,
        borderWidth: 2,
        pointBackgroundColor: algo.color
      }]
    },
    options: {
      responsive: true,
      scales: {
        r: {
          beginAtZero: true, max: 10,
          ticks: { stepSize: 2, color: '#64748b', backdropColor: 'transparent' },
          grid: { color: 'rgba(255,255,255,0.08)' },
          angleLines: { color: 'rgba(255,255,255,0.08)' },
          pointLabels: { color: '#94a3b8', font: { family: 'Poppins', size: 12 } }
        }
      },
      plugins: { legend: { labels: { color: '#f1f5f9' } } }
    }
  });
}

function renderMetrics(algo) {
  const container = document.getElementById('trilemmaMetrics');
  const m = algo.metrics;
  const defs = [
    ['tps', 'Transactions Per Second', 'fa-tachometer-alt'],
    ['blockTime', 'Average Block Time', 'fa-clock'],
    ['finality', 'Finality Time', 'fa-flag-checkered'],
    ['energyEfficiency', 'Energy Efficiency', 'fa-leaf'],
    ['attackResistance51', '51% Attack Resistance', 'fa-shield-alt'],
    ['sybilResistance', 'Sybil Attack Resistance', 'fa-user-shield'],
    ['faultTolerance', 'Fault Tolerance', 'fa-heartbeat'],
    ['validationCost', 'Validation Cost', 'fa-coins']
  ];
  container.innerHTML = defs.map(([key, label, icon]) => {
    const metric = m[key];
    const v = metric.value;
    const score = v.includes('Very High') || v.includes('Very Low') && v.includes('High') ? 90
      : v.includes('High') ? 80 : v.includes('Low') ? 25 : 55;
    return `<div class="metric-card fade-update">
      <div class="metric-header">
        <span class="metric-name"><i class="fas ${icon}"></i> ${label}</span>
        <span class="metric-score">${v}</span>
      </div>
      <div class="metric-bar"><div class="metric-bar-fill" data-width="${score}"></div></div>
      <p class="metric-explanation">${metric.explanation}</p>
    </div>`;
  }).join('');
  requestAnimationFrame(() => {
    container.querySelectorAll('.metric-bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.width + '%';
    });
  });
}

function renderBlockchainCards(algoId) {
  const container = document.getElementById('blockchainCards');
  const chains = BLOCKCHAINS.filter(b => b.consensus === algoId);
  container.innerHTML = chains.map(bc => `
    <article class="bc-card fade-update" data-name="${bc.name.toLowerCase()} ${bc.crypto.toLowerCase()}">
      <div class="bc-card-header">
        <div class="bc-logo" style="background:${bc.color}">${bc.logoLetter}</div>
        <div><h3>${bc.name}</h3><span class="bc-crypto">${bc.crypto}</span></div>
      </div>
      <div class="bc-details">
        <div class="bc-detail"><span class="bc-detail-label">Consensus</span><span class="bc-detail-value">${bc.consensusLabel}</span></div>
        <div class="bc-detail"><span class="bc-detail-label">Launch Year</span><span class="bc-detail-value">${bc.year}</span></div>
        <div class="bc-detail"><span class="bc-detail-label">Founder</span><span class="bc-detail-value">${bc.founder}</span></div>
        <div class="bc-detail"><span class="bc-detail-label">Main Purpose</span><span class="bc-detail-value">${bc.purpose}</span></div>
        <div class="bc-detail"><span class="bc-detail-label">Block Time</span><span class="bc-detail-value">${bc.blockTime}</span></div>
      </div>
      <p class="bc-reason"><strong>Why ${bc.consensusLabel}:</strong> ${bc.reason}</p>
      <div class="bc-card-footer">
        <span class="bc-tps-badge"><i class="fas fa-bolt"></i> ${bc.tps} TPS</span>
        <a href="${bc.website}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline">Website</a>
      </div>
    </article>`).join('') || '<p style="color:var(--text-muted)">No blockchains found.</p>';
  const search = document.getElementById('blockchainSearch');
  if (search && !search._bound) {
    search._bound = true;
    search.addEventListener('input', () => {
      const q = search.value.toLowerCase().trim();
      document.querySelectorAll('.bc-card').forEach(card => {
        card.style.display = !q || (card.dataset.name || '').includes(q) ? '' : 'none';
      });
    });
  }
  if (search) search.value = '';
}

function renderSmartContracts(algoId) {
  const container = document.getElementById('smartContractContent');
  const contracts = SMART_CONTRACTS.filter(sc => {
    const bc = BLOCKCHAINS.find(b => b.name === sc.blockchain);
    return bc && bc.consensus === algoId;
  });
  if (!contracts.length) {
    container.innerHTML = `<p style="color:var(--text-secondary);padding:1rem">No smart contract platforms for ${algoMap[algoId]?.name}.</p>`;
    return;
  }
  container.innerHTML = `<div class="sc-grid">${contracts.map(sc => {
    const stars = '★'.repeat(sc.devExperience) + '☆'.repeat(5 - sc.devExperience);
    return `<article class="sc-card fade-update">
      <div class="sc-card-header">
        <h3>${sc.blockchain}</h3>
        <div class="sc-meta">
          <span class="sc-tag">${sc.consensus}</span>
          <span class="sc-tag">${sc.language}</span>
          <span class="sc-tag">${sc.compiler}</span>
        </div>
        <div class="sc-dx">Developer Experience: <span class="dx-stars">${stars}</span> (${sc.devExperience}/5)</div>
      </div>
      <div class="sc-code"><pre><code class="language-${sc.codeLang}">${escapeHtml(sc.code)}</code></pre></div>
    </article>`;
  }).join('')}</div>`;
  container.querySelectorAll('pre code').forEach(block => hljs.highlightElement(block));
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderLayerDiagram(algoId) {
  const related = BLOCKCHAINS.filter(b => b.consensus === algoId).map(b => b.name);
  const l1 = ['Bitcoin','Ethereum','Solana','Cardano','Algorand','Tezos','EOS','TRON','VeChain','Zilliqa','Monero','Litecoin','Dogecoin'];
  const l2 = ['Polygon','Arbitrum','Optimism','Lightning Network'];
  document.getElementById('layerDiagram').innerHTML = `
    <div class="architecture-visual fade-update">
      <div class="arch-layer arch-l2"><div>Layer 2 — Scaling Solutions</div>
        <div style="display:flex;gap:1rem;flex-wrap:wrap;justify-content:center;margin-top:0.75rem">
          ${l2.map(c => `<span class="arch-l2-item" style="${related.includes(c)?'border:2px solid var(--cyan)':''}">${c}</span>`).join('')}
        </div>
      </div>
      <div class="arch-connector"></div>
      <div class="arch-layer arch-l1"><div>Layer 1 — Base Blockchains</div>
        <div class="arch-l1-items">${l1.slice(0,8).map(c => `<span class="arch-l1-item ${related.includes(c)?'highlighted':''}">${c}</span>`).join('')}
        </div>
      </div>
    </div>`;
  document.getElementById('layerTableBody').innerHTML = LAYER_DATA.map(row => {
    const rel = related.some(c => row.blockchain.includes(c) || c.includes(row.blockchain));
    return `<tr style="${rel?'background:rgba(6,182,212,0.05)':''}">
      <td><strong>${row.blockchain}</strong></td>
      <td><span class="layer-badge ${row.layer==='L1'?'l1':'l2'}">${row.layer}</span></td>
      <td>${row.reason}</td><td>${row.relationship}</td></tr>`;
  }).join('');
}

function initHeatmap() {
  const filter = document.getElementById('matrixFilter');
  filter.innerHTML = '<option value="all">All Blockchains</option>' +
    ALGORITHMS.map(a => `<option value="${a.id}">${a.name}</option>`).join('');
  filter.addEventListener('change', () => renderHeatmap(filter.value));
  renderHeatmap('all');
}

function updateMatrixFilter(algoId) {
  const filter = document.getElementById('matrixFilter');
  if (filter) { filter.value = algoId; renderHeatmap(algoId); }
}

function renderHeatmap(filterId) {
  const container = document.getElementById('heatmapContainer');
  let chains = filterId === 'all' ? BLOCKCHAINS : BLOCKCHAINS.filter(b => b.consensus === filterId);
  let html = '<table class="heatmap-table"><thead><tr><th></th>';
  chains.forEach(c => { html += `<th>${c.name}</th>`; });
  html += '</tr></thead><tbody>';
  chains.forEach((row, i) => {
    html += `<tr><th class="row-header">${row.name}</th>`;
    chains.forEach((col, j) => {
      if (i === j) html += '<td class="diagonal">—</td>';
      else {
        const same = row.consensus === col.consensus;
        const tip = same ? `Compatible: both use ${row.consensusLabel}.` : `Different: ${row.name} uses ${row.consensusLabel} while ${col.name} uses ${col.consensusLabel}.`;
        html += `<td class="${same?'same':'different'}" data-tooltip="${tip}" tabindex="0"></td>`;
      }
    });
    html += '</tr>';
  });
  html += '</tbody></table>';
  container.innerHTML = html;
  container.querySelectorAll('[data-tooltip]').forEach(cell => {
    cell.addEventListener('mouseenter', e => showTooltip(e, cell.dataset.tooltip));
    cell.addEventListener('mouseleave', hideTooltip);
    cell.addEventListener('focus', e => showTooltip(e, cell.dataset.tooltip));
    cell.addEventListener('blur', hideTooltip);
  });
}

function initComparisonTable() {
  renderComparisonTable();
  document.getElementById('comparisonSearch')?.addEventListener('input', e => {
    const q = e.target.value.toLowerCase();
    document.querySelectorAll('#comparisonTableBody tr').forEach(row => {
      row.style.display = row.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
  });
  document.querySelectorAll('#comparisonTable th[data-sort]').forEach(th => {
    th.addEventListener('click', () => sortTable(th.dataset.sort));
    th.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); sortTable(th.dataset.sort); } });
  });
  document.getElementById('exportCsvBtn')?.addEventListener('click', exportCsv);
}

function renderComparisonTable() {
  document.getElementById('comparisonTableBody').innerHTML = ALGORITHMS.map(algo => {
    const c = algo.comparison;
    return `<tr data-id="${algo.id}">
      <td><strong style="color:${algo.color}">${algo.name}</strong></td>
      <td>${renderRating(c.security)}</td><td>${renderRating(c.scalability)}</td>
      <td>${renderRating(c.decentralization)}</td><td>${c.energy}</td>
      <td>${c.tps}</td><td>${c.blockTime}</td>
      <td>${renderCheck(c.permissioned)}</td><td>${renderCheck(c.permissionless)}</td>
      <td>${c.smartContracts}</td><td style="white-space:normal;max-width:200px">${c.networks}</td></tr>`;
  }).join('');
}

function renderRating(val) {
  const map = { 'Very High':5,'High':4,'Medium':3,'Low':2,'Very Low':1 };
  const num = map[val] || 3;
  return `<span class="rating-dots">${[1,2,3,4,5].map(i => `<span class="rating-dot ${i<=num?'filled':''}"></span>`).join('')}</span>`;
}

function renderCheck(val) {
  return val === 'Yes' ? '<i class="fas fa-check check-yes"></i>' : '<i class="fas fa-times check-no"></i>';
}

function highlightComparisonRow(id) {
  document.querySelectorAll('#comparisonTableBody tr').forEach(row => {
    row.classList.toggle('active-row', row.dataset.id === id);
  });
}

function sortTable(column) {
  if (sortColumn === column) sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
  else { sortColumn = column; sortDirection = 'asc'; }
  const order = { 'Very High':5,'High':4,'Medium':3,'Low':2,'Very Low':1,'Yes':1,'No':0,'Limited':2 };
  const sorted = [...ALGORITHMS].sort((a,b) => {
    let valA = column === 'name' ? a.name : a.comparison[column];
    let valB = column === 'name' ? b.name : b.comparison[column];
    if (order[valA] !== undefined) { valA = order[valA]; valB = order[valB]; }
    if (typeof valA === 'string') { valA = valA.toLowerCase(); valB = valB.toLowerCase(); }
    if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
    if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });
  const tbody = document.getElementById('comparisonTableBody');
  sorted.forEach(algo => { const row = tbody.querySelector(`tr[data-id="${algo.id}"]`); if (row) tbody.appendChild(row); });
}

function exportCsv() {
  const headers = ['Algorithm','Security','Scalability','Decentralization','Energy','TPS','Block Time','Permissioned','Permissionless','Smart Contracts','Networks'];
  const rows = ALGORITHMS.map(a => { const c = a.comparison; return [a.name,c.security,c.scalability,c.decentralization,c.energy,c.tps,c.blockTime,c.permissioned,c.permissionless,c.smartContracts,c.networks]; });
  const csv = [headers,...rows].map(r => r.map(c => `"${String(c).replace(/"/g,'""')}"`).join(',')).join('\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
  a.download = 'consensus-algorithms-comparison.csv';
  a.click();
}

function initTimeline() {
  document.getElementById('timelineContainer').innerHTML = `
    <div class="timeline-line"></div><div class="timeline-events">
    ${TIMELINE_EVENTS.map(ev => `
      <div class="timeline-event" data-algo="${ev.algorithmId||''}">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-year">${ev.year}</div>
          <div class="timeline-title">${ev.title}</div>
          <p class="timeline-desc">${ev.description}</p>
          ${ev.algorithmId ? `<span class="timeline-algo-tag">${algoMap[ev.algorithmId]?.abbr||ev.algorithmId}</span>` : ''}
        </div>
      </div>`).join('')}
    </div>`;
  const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.2 });
  document.querySelectorAll('.timeline-event').forEach(el => obs.observe(el));
}

function highlightTimeline(algoId) {
  document.querySelectorAll('.timeline-event').forEach(ev => {
    ev.classList.toggle('highlighted', ev.dataset.algo === algoId);
  });
}

function initQuiz() { startQuiz(); }

function startQuiz() {
  quizState = { questions: shuffle([...QUIZ_QUESTIONS]).slice(0,10), currentIndex: 0, score: 0, answered: false };
  document.getElementById('quizResult')?.classList.add('hidden');
  document.getElementById('quizQuestionArea')?.classList.remove('hidden');
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const { questions, currentIndex } = quizState;
  if (currentIndex >= questions.length) { showQuizResult(); return; }
  const q = questions[currentIndex];
  const pct = (currentIndex / questions.length) * 100;
  const bar = document.getElementById('quizProgressBar');
  bar.style.width = pct + '%';
  bar.setAttribute('aria-valuenow', Math.round(pct));
  document.getElementById('quizQuestionArea').innerHTML = `
    <div class="quiz-question">
      <div class="quiz-question-number">Question ${currentIndex+1} of ${questions.length}</div>
      <h3>${q.question}</h3>
      <div class="quiz-options">${q.options.map((opt,i) => `<button class="quiz-option" data-index="${i}">${opt}</button>`).join('')}</div>
      <div id="quizFeedback"></div>
    </div>`;
  document.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => answerQuiz(parseInt(btn.dataset.index)));
  });
  quizState.answered = false;
}

function answerQuiz(selected) {
  if (quizState.answered) return;
  quizState.answered = true;
  const q = quizState.questions[quizState.currentIndex];
  const correct = selected === q.correct;
  if (correct) quizState.score++;
  document.querySelectorAll('.quiz-option').forEach((btn,i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add('correct');
    else if (i === selected) btn.classList.add('incorrect');
  });
  document.getElementById('quizFeedback').innerHTML = `
    <div class="quiz-feedback ${correct?'correct-fb':'incorrect-fb'}">
      ${correct?'Correct!':'Incorrect.'} ${q.explanation}
    </div>`;
  setTimeout(() => { quizState.currentIndex++; renderQuizQuestion(); }, 2000);
}

function showQuizResult() {
  document.getElementById('quizQuestionArea')?.classList.add('hidden');
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  const total = quizState.questions.length;
  const pct = Math.round((quizState.score/total)*100);
  const msg = pct >= 80 ? 'Excellent! Strong grasp of consensus mechanisms.' : pct >= 60 ? 'Good job! Review the glossary.' : 'Keep learning! Explore the algorithm sections.';
  result.innerHTML = `<div class="quiz-score-circle">${quizState.score}/${total}</div>
    <h3>Quiz Complete — ${pct}%</h3><p>${msg}</p>
    <button class="btn btn-primary" id="retryQuiz"><i class="fas fa-redo"></i> Try Again</button>`;
  document.getElementById('retryQuiz')?.addEventListener('click', startQuiz);
  document.getElementById('quizProgressBar').style.width = '100%';
}

function shuffle(arr) {
  for (let i = arr.length-1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]] = [arr[j],arr[i]];
  }
  return arr;
}

function initGlossary() {
  const grid = document.getElementById('glossaryGrid');
  grid.innerHTML = GLOSSARY.map(item => `
    <div class="glossary-item" data-term="${item.term.toLowerCase()}">
      <div class="glossary-term">${item.term}</div>
      <p class="glossary-definition">${item.definition}</p>
    </div>`).join('');
  document.getElementById('glossarySearch')?.addEventListener('input', e => {
    const q = e.target.value.toLowerCase();
    grid.querySelectorAll('.glossary-item').forEach(item => {
      item.classList.toggle('hidden-term', !(item.dataset.term.includes(q) || item.textContent.toLowerCase().includes(q)));
    });
  });
}

function initReferences() {
  document.getElementById('referencesGrid').innerHTML = REFERENCES.map(ref => `
    <article class="ref-card">
      <div class="ref-icon" style="background:${ref.color}22;color:${ref.color}"><i class="fas ${ref.icon}"></i></div>
      <h3>${ref.title}</h3><p>${ref.description}</p>
      <a href="${ref.url}" target="_blank" rel="noopener noreferrer" class="ref-link">View Resource <i class="fas fa-arrow-right"></i></a>
    </article>`).join('');
}

function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  btn?.addEventListener('click', () => {
    const open = sidebar.classList.toggle('open');
    overlay.classList.toggle('active', open);
    btn.setAttribute('aria-expanded', open);
  });
  overlay?.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    btn.setAttribute('aria-expanded', 'false');
  });
  sidebar?.querySelectorAll('.algo-nav-item').forEach(item => {
    item.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

function initScrollReveal() {
  const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

function initCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { animateCounter(e.target); obs.unobserve(e.target); } });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-number').forEach(el => obs.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const start = performance.now();
  const step = now => {
    const p = Math.min((now-start)/1500, 1);
    el.textContent = Math.round((1-Math.pow(1-p,3))*target);
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function showTooltip(e, text) {
  const tip = document.getElementById('tooltip');
  tip.textContent = text;
  tip.classList.add('visible');
  const rect = e.target.getBoundingClientRect();
  tip.style.left = Math.min(rect.left, window.innerWidth-310) + 'px';
  tip.style.top = (rect.top - tip.offsetHeight - 8) + 'px';
}

function hideTooltip() {
  document.getElementById('tooltip').classList.remove('visible');
}

function initBlockchainBackground() {
  const canvas = document.getElementById('blockchainCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let nodes = [], animId;
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const count = Math.min(Math.floor(canvas.width*canvas.height/25000), 80);
    nodes = Array.from({length: count}, () => ({
      x: Math.random()*canvas.width, y: Math.random()*canvas.height,
      vx: (Math.random()-0.5)*0.4, vy: (Math.random()-0.5)*0.4,
      radius: Math.random()*2+1
    }));
  }
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    nodes.forEach((node,i) => {
      node.x += node.vx; node.y += node.vy;
      if (node.x<0||node.x>canvas.width) node.vx*=-1;
      if (node.y<0||node.y>canvas.height) node.vy*=-1;
      ctx.beginPath(); ctx.arc(node.x,node.y,node.radius,0,Math.PI*2);
      ctx.fillStyle='rgba(59,130,246,0.5)'; ctx.fill();
      for (let j=i+1;j<nodes.length;j++) {
        const dx=nodes[j].x-node.x, dy=nodes[j].y-node.y, dist=Math.sqrt(dx*dx+dy*dy);
        if (dist<150) {
          ctx.beginPath(); ctx.moveTo(node.x,node.y); ctx.lineTo(nodes[j].x,nodes[j].y);
          ctx.strokeStyle=`rgba(139,92,246,${0.15*(1-dist/150)})`; ctx.lineWidth=0.5; ctx.stroke();
        }
      }
    });
    animId = requestAnimationFrame(draw);
  }
  resize(); draw();
  window.addEventListener('resize', resize);
}
