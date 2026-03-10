/* =============================================
   GREENOMICS — script.js
   © 2026 Greenomics. All Rights Reserved.
   ============================================= */

/* ============================================================
   NAVBAR
   ============================================================ */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));

// Navbar scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
  // Close mobile nav on scroll
  navLinks.classList.remove('open');
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active-nav', a.getAttribute('href') === '#' + current);
  });
});

/* ============================================================
   EFFECTS TABS
   ============================================================ */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    const tab = document.getElementById('tab-' + btn.dataset.tab);
    if(tab) tab.classList.add('active');
  });
});

/* ============================================================
   STATE FOREST DATA — FSI 2024–25
   ============================================================ */
const stateData = [
  { state:'Madhya Pradesh', cover:77482, pct:25.1, change:'+312', status:'good' },
  { state:'Arunachal Pradesh', cover:66688, pct:79.6, change:'-115', status:'warn' },
  { state:'Chhattisgarh', cover:55717, pct:41.1, change:'+148', status:'good' },
  { state:'Odisha', cover:52156, pct:33.5, change:'-89', status:'warn' },
  { state:'Maharashtra', cover:50798, pct:16.5, change:'-210', status:'warn' },
  { state:'Karnataka', cover:38730, pct:20.2, change:'-178', status:'warn' },
  { state:'Telangana', cover:26325, pct:23.5, change:'-134', status:'warn' },
  { state:'Uttarakhand', cover:24303, pct:45.4, change:'+95', status:'good' },
  { state:'Gujarat', cover:14841, pct:7.5, change:'+210', status:'good' },
  { state:'Rajasthan', cover:16655, pct:4.9, change:'-56', status:'bad' },
  { state:'Punjab', cover:3613, pct:3.67, change:'-142', status:'bad' },
  { state:'Haryana', cover:1603, pct:3.6, change:'-48', status:'bad' },
  { state:'Kerala', cover:21148, pct:54.7, change:'-210', status:'bad' },
  { state:'Himachal Pradesh', cover:15434, pct:27.7, change:'+67', status:'good' },
  { state:'Assam', cover:27674, pct:35.3, change:'-298', status:'bad' },
  { state:'West Bengal', cover:16847, pct:18.9, change:'-186', status:'bad' },
];

const stateBody = document.getElementById('stateTableBody');
if(stateBody) {
  stateData.forEach(s => {
    const statusLabel = { good:'✅ Stable/Growing', warn:'⚠️ At Risk', bad:'🔴 Critical' }[s.status];
    stateBody.innerHTML += `<tr>
      <td><strong>${s.state}</strong></td>
      <td>${s.cover.toLocaleString()}</td>
      <td>${s.pct}%</td>
      <td style="color:${s.change.startsWith('+') ? '#5cb85c' : '#d9534f'}; font-weight:700">${s.change} km²</td>
      <td class="status-${s.status}">${statusLabel}</td>
    </tr>`;
  });
}

/* ============================================================
   MOST AFFECTED STATES
   ============================================================ */
const affectedData = [
  { state:'Assam', loss:298, badge:'Critical', level:'critical', reason:'Slash-and-burn agriculture, oil exploration, and encroachment are rapidly reducing Assam\'s once-dense forests.', icon:'🔴' },
  { state:'Maharashtra', loss:210, badge:'Critical', level:'critical', reason:'Urban expansion near Mumbai-Pune corridor, infrastructure projects, and illegal sand mining destroy forests yearly.', icon:'🔴' },
  { state:'Kerala', loss:210, badge:'Critical', level:'critical', reason:'Plantation expansion (rubber, eucalyptus), landslides induced by deforestation, and tourism overdevelopment.', icon:'🔴' },
  { state:'Karnataka', loss:178, badge:'High', level:'high', reason:'Mining operations in Western Ghats, road construction, and monoculture plantations replacing natural forests.', icon:'🟠' },
  { state:'Punjab', loss:142, badge:'High', level:'high', reason:'Agricultural expansion, urban sprawl around Ludhiana/Amritsar, stubble burning, and canal construction.', icon:'🟠' },
  { state:'West Bengal', loss:186, badge:'Critical', level:'critical', reason:'Encroachment on Sundarbans mangrove buffer zones, coal mining in Paschim Bardhaman, and rapid urbanisation around Kolkata.', icon:'🔴' },
  { state:'Telangana', loss:134, badge:'High', level:'high', reason:'Industrial corridors, granite quarrying, and rapid urbanisation around Hyderabad metro region.', icon:'🟠' },
  { state:'Arunachal Pradesh', loss:115, badge:'Moderate', level:'moderate', reason:'Road construction (BRO projects), hydroelectric dams, and shifting cultivation degrading forest edges.', icon:'🟡' },
  { state:'Odisha', loss:89, badge:'Moderate', level:'moderate', reason:'Iron ore and coal mining in forested districts of Sundargarh, Keonjhar, and Mayurbhanj.', icon:'🟡' },
];

const affectedGrid = document.getElementById('affectedStatesGrid');
if(affectedGrid) {
  affectedData.forEach(s => {
    affectedGrid.innerHTML += `<div class="affected-card ${s.level}">
      <div class="aff-state-name">${s.icon} ${s.state}</div>
      <div class="aff-loss">-${s.loss}</div>
      <div class="aff-loss-label">km² lost (2020–25)</div>
      <div class="aff-reason">${s.reason}</div>
      <span class="aff-badge badge-${s.level}">${s.badge}</span>
    </div>`;
  });
}

/* ============================================================
   STATE PENALTIES DATA
   ============================================================ */
const penaltiesData = [
  { state:'Maharashtra', fine:'₹10,000–₹5 lakh', jail:'3–7 years', special:'Forest Rights Act; tribal court for violations' },
  { state:'Karnataka', fine:'₹25,000–₹2 lakh', jail:'1–5 years', special:'Special forest courts; equipment seizure' },
  { state:'Kerala', fine:'₹50,000–₹5 lakh', jail:'2–7 years', special:'Silent Valley Protection rules apply' },
  { state:'Madhya Pradesh', fine:'₹5,000–₹1 lakh', jail:'6m–3 years', special:'Van Mahotsav Act; community fines' },
  { state:'Punjab', fine:'₹50,000/tree', jail:'Up to 3 years', special:'Punjab Land Preservation Act 1900' },
  { state:'West Bengal', fine:'₹20,000–₹2 lakh', jail:'1–5 years', special:'WB Forest Act; Sundarbans Special Zone penalties' },
  { state:'Haryana', fine:'₹10,000–₹50,000', jail:'1–3 years', special:'Compensatory plantation 10:1 mandatory' },
  { state:'Rajasthan', fine:'₹2,000–₹50,000', jail:'6m–2 years', special:'Aravalli notification; special penalties' },
  { state:'Uttarakhand', fine:'₹1 lakh–₹10 lakh', jail:'3–10 years', special:'Chipko legacy; strict enforcement' },
  { state:'Assam', fine:'₹5,000–₹1 lakh', jail:'1–5 years', special:'Tribal land rights under ILR 1886' },
  { state:'Odisha', fine:'₹10,000–₹2 lakh', jail:'1–5 years', special:'Mining-linked deforestation: double fine' },
];

const penaltiesBody = document.getElementById('penaltiesTableBody');
if(penaltiesBody) {
  penaltiesData.forEach(p => {
    penaltiesBody.innerHTML += `<tr>
      <td><strong>${p.state}</strong></td>
      <td>${p.fine}</td>
      <td>${p.jail}</td>
      <td>${p.special}</td>
    </tr>`;
  });
}

/* ============================================================
   GOVT SCHEMES
   ============================================================ */
const schemesData = [
  { icon:'🌿', name:'National Afforestation Programme (NAP)', desc:'Restores degraded forest land through participatory afforestation with village forest committees.', url:'https://moef.gov.in/en/division/national-afforestation-programme/', link:'moef.gov.in' },
  { icon:'🌱', name:'Green India Mission (GIM)', desc:'Under National Action Plan on Climate Change — targets 10 million hectares of greening by 2030.', url:'https://greenmission.nic.in/', link:'greenmission.nic.in' },
  { icon:'🌳', name:'Compensatory Afforestation Fund (CAMPA)', desc:'Funds collected from industries using forest land, used exclusively for compensatory afforestation.', url:'https://campa.nic.in/', link:'campa.nic.in' },
  { icon:'🏡', name:'Joint Forest Management (JFM)', desc:'Empowers local communities to protect and manage degraded forest areas in partnership with Forest Dept.', url:'https://moef.gov.in', link:'moef.gov.in' },
  { icon:'🌾', name:'Ek Ped Maa Ke Naam', desc:'PM Modi\'s 2024 initiative — plant one tree in name of your mother. Targets 100 crore trees nationwide.', url:'https://ekpedmaakename.in/', link:'ekpedmaakename.in' },
  { icon:'🔬', name:'REDD+ India Programme', desc:'International framework for Reducing Emissions from Deforestation and Forest Degradation in India.', url:'https://redd.unfccc.int/countries/index.html?country=IN', link:'unfccc.int' },
  { icon:'🐯', name:'Project Tiger / Project Elephant', desc:'Flagship conservation programmes protecting 55 tiger reserves and elephant corridors across India.', url:'https://ntca.gov.in/', link:'ntca.gov.in' },
  { icon:'🌊', name:'National Wetlands Conservation Programme', desc:'Protects 75 wetland ecosystems interlocked with forest cover and biodiversity.', url:'https://moef.gov.in', link:'moef.gov.in' },
  { icon:'🌿', name:'WB Van Mahotsav Scheme', desc:'West Bengal\'s annual tree plantation drive planting 1 crore saplings every monsoon season statewide.', url:'https://wbforest.gov.in/', link:'wbforest.gov.in' },
  { icon:'🦁', name:'Sundarbans Biosphere Reserve Programme', desc:'Protects and restores the world\'s largest mangrove delta shared between India and Bangladesh.', url:'https://sundarbanbiosphere.org/', link:'sundarbanbiosphere.org' },
];

const schemesGrid = document.getElementById('schemesGrid');
if(schemesGrid) {
  schemesData.forEach(s => {
    schemesGrid.innerHTML += `<a href="${s.url}" target="_blank" rel="noopener" class="scheme-card">
      <div class="scheme-icon">${s.icon}</div>
      <h4>${s.name}</h4>
      <p>${s.desc}</p>
      <span class="scheme-link">🔗 ${s.link} ↗</span>
    </a>`;
  });
}

/* ============================================================
   AWARENESS STEPS
   ============================================================ */
const awarenessData = [
  { num:'01', icon:'🌱', title:'Plant Native Trees', text:'Plant local species — Peepal, Banyan, Neem, Ashoka, Mahua. Avoid invasive Eucalyptus. One tree absorbs 21 kg of CO₂ per year.' },
  { num:'02', icon:'♻️', title:'Reduce Paper Use', text:'Go digital. Print double-sided. Recycle paper. 40% of industrial logging globally goes to paper production.' },
  { num:'03', icon:'🥗', title:'Sustainable Diet', text:'70% of Amazon deforestation is for cattle ranching. Reducing meat consumption directly reduces forest destruction.' },
  { num:'04', icon:'🛒', title:'Buy Responsibly', text:'Choose FSC-certified wood and paper products. Support brands with zero-deforestation pledges and transparent supply chains.' },
  { num:'05', icon:'📣', title:'Spread Awareness', text:'Share verified forest data on social media. Support organisations like WWF India, Wildlife Trust of India, and Greenpeace.' },
  { num:'06', icon:'⚖️', title:'Know Your Rights', text:'Report illegal tree cutting to your local Forest Department or on MoEFCC helpline: 1800-11-4678. You are legally protected.' },
  { num:'07', icon:'🏫', title:'Educate Schools', text:'Advocate for environmental curriculum. Children who learn about forests become their protectors. One child teaches a whole family.' },
  { num:'08', icon:'🏛️', title:'Demand Policy', text:'Vote for representatives who support forest protection. Write to your MP/MLA. Participate in public forest clearance consultations.' },
  { num:'09', icon:'💰', title:'Support NGOs', text:'Donate to reforestation projects. Even ₹100 can plant 3–5 trees through certified programmes like I Plant a Tree.' },
  { num:'10', icon:'🌐', title:'Digital Footprint', text:'Use Ecosia — a search engine that plants trees with ad revenue. Every 45 searches = 1 tree planted automatically.' },
  { num:'11', icon:'🚶', title:'Forest Walks', text:'Participate in forest conservation walks, clean-up drives, and citizen science tree-tagging programmes in your city.' },
  { num:'12', icon:'🌿', title:'Urban Greening', text:'Adopt a roadside tree. Campaign your RWA to plant trees in housing societies. Urban trees reduce temperatures by 5°C.' },
];

const awarenessGrid = document.getElementById('awarenessGrid');
if(awarenessGrid) {
  awarenessData.forEach(a => {
    awarenessGrid.innerHTML += `<div class="aware-card">
      <div class="aware-num">${a.num}</div>
      <div class="aware-icon">${a.icon}</div>
      <h3>${a.title}</h3>
      <p>${a.text}</p>
    </div>`;
  });
}

/* ============================================================
   LIVE COUNTERS
   ============================================================ */
function formatNumber(n) {
  if(n >= 1e9) return (n/1e9).toFixed(2) + 'B';
  if(n >= 1e6) return (n/1e6).toFixed(2) + 'M';
  if(n >= 1e3) return (n/1e3).toFixed(1) + 'K';
  return Math.floor(n).toLocaleString();
}

function updateCounters() {
  const now = new Date();
  // Seconds elapsed since Jan 1 of current year
  const yearStart = new Date(now.getFullYear(), 0, 1);
  const secondsElapsed = (now - yearStart) / 1000;
  const minutesElapsed = secondsElapsed / 60;

  // Rates
  const treesLostPerMin = 47500;
  const treesPlantedPerMin = 8500;
  const co2PerYear = 3.8e9; // tonnes
  const hectaresPerMin = 8.9;

  const secsInYear = 365.25 * 24 * 3600;
  const yearFrac = secondsElapsed / secsInYear;

  const treesLost = minutesElapsed * treesLostPerMin;
  const treesPlanted = minutesElapsed * treesPlantedPerMin;
  const co2 = co2PerYear * yearFrac;
  const hectares = minutesElapsed * hectaresPerMin;

  const elTL = document.getElementById('treesLost');
  const elTP = document.getElementById('treesPlanted');
  const elCO = document.getElementById('co2Released');
  const elHL = document.getElementById('hectaresLost');
  if(elTL) elTL.textContent = formatNumber(treesLost);
  if(elTP) elTP.textContent = formatNumber(treesPlanted);
  if(elCO) elCO.textContent = formatNumber(co2);
  if(elHL) elHL.textContent = formatNumber(hectares);

  // Year progress
  const pct = Math.min(100, (yearFrac * 100)).toFixed(1);
  const el = document.getElementById('yearPercent');
  const bar = document.getElementById('yearBar');
  if(el) el.textContent = pct + '%';
  if(bar) bar.style.width = pct + '%';
}
updateCounters();
setInterval(updateCounters, 1000);

/* ============================================================
   CHARTS (Chart.js)
   ============================================================ */
window.addEventListener('load', () => {
  // Bar chart — forest loss by state
  const barCtx = document.getElementById('deforestBarChart');
  if(barCtx) {
    new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: ['Assam','W. Bengal','Maharashtra','Kerala','Karnataka','Punjab','Telangana','Arunachal','Odisha','Rajasthan'],
        datasets: [{
          label: 'Forest Loss (km²) 2020–2025',
          data: [298, 186, 210, 210, 178, 142, 134, 115, 89, 56],
          backgroundColor: [
            'rgba(217,83,79,0.85)','rgba(217,83,79,0.85)','rgba(217,83,79,0.85)',
            'rgba(245,166,35,0.85)','rgba(245,166,35,0.85)','rgba(245,166,35,0.85)',
            'rgba(240,208,80,0.85)','rgba(240,208,80,0.85)','rgba(240,208,80,0.85)','rgba(240,208,80,0.85)'
          ],
          borderColor: 'rgba(212,160,23,0.5)',
          borderWidth: 1,
          borderRadius: 6,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { labels:{ color:'rgba(255,255,255,0.8)' } }
        },
        scales: {
          x: { ticks:{ color:'rgba(255,255,255,0.7)' }, grid:{ color:'rgba(255,255,255,0.05)' } },
          y: { ticks:{ color:'rgba(255,255,255,0.7)' }, grid:{ color:'rgba(255,255,255,0.05)' } }
        }
      }
    });
  }
  // Pie chart — forest distribution
  const pieCtx = document.getElementById('forestPieChart');
  if(pieCtx) {
    new Chart(pieCtx, {
      type: 'doughnut',
      data: {
        labels: ['Very Dense Forest','Moderately Dense','Open Forest','Scrub','Non-Forest'],
        datasets: [{
          data: [2.76, 9.77, 9.13, 1.61, 76.73],
          backgroundColor: ['#1a5c1a','#2e8b2e','#5cb85c','#f5a623','#8b4513'],
          borderColor: '#0f1f0f', borderWidth: 3,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { labels:{ color:'rgba(255,255,255,0.8)' }, position:'bottom' }
        }
      }
    });
  }
});

/* ============================================================
   GAME
   ============================================================ */
let gameState = {
  running: false, score: 0, treesPlanted: 0,
  health: 100, timer: 60, level: 1,
  board: [], interval: null, timerInterval: null
};
const GRID_SIZE = 7 * 5; // 7 cols x 5 rows = 35 cells
const CELL_TYPES = { EMPTY:'empty', TREE:'tree', LUMBERJACK:'lumberjack', FIRE:'fire' };

function initBoard() {
  const board = document.getElementById('gameBoard');
  if(!board) return;
  // Fix grid rows
  board.style.gridTemplateColumns = 'repeat(7, 1fr)';
  board.style.gridTemplateRows = 'repeat(5, 1fr)';
  gameState.board = Array(35).fill(CELL_TYPES.EMPTY);
  renderBoard();
}

function renderBoard() {
  const board = document.getElementById('gameBoard');
  if(!board) return;
  board.innerHTML = '';
  gameState.board.forEach((type, i) => {
    const cell = document.createElement('div');
    cell.className = 'game-cell ' + type;
    cell.dataset.index = i;
    const emoji = { empty:'🌱', tree:'🌳', lumberjack:'🪓', fire:'🔥' }[type];
    cell.textContent = emoji;
    cell.addEventListener('click', () => handleCellClick(i));
    board.appendChild(cell);
  });
}

function handleCellClick(idx) {
  if(!gameState.running) return;
  const type = gameState.board[idx];
  if(type === CELL_TYPES.EMPTY) {
    gameState.board[idx] = CELL_TYPES.TREE;
    gameState.treesPlanted++;
    gameState.score += 10;
    updateGameUI();
    renderBoard();
  } else if(type === CELL_TYPES.LUMBERJACK) {
    gameState.board[idx] = CELL_TYPES.EMPTY;
    gameState.score += 20;
    updateGameUI();
    renderBoard();
    setMessage('🎉 Lumberjack stopped! +20 pts');
  } else if(type === CELL_TYPES.FIRE) {
    gameState.board[idx] = CELL_TYPES.EMPTY;
    gameState.score += 15;
    updateGameUI();
    renderBoard();
    setMessage('🚒 Fire extinguished! +15 pts');
  }
}

function setMessage(msg) {
  const el = document.getElementById('gameMessage');
  if(el) el.textContent = msg;
}

function updateGameUI() {
  const e = (id, v) => { const el=document.getElementById(id); if(el) el.textContent=v; };
  e('gameTrees', gameState.treesPlanted);
  e('gameScore', gameState.score);
  e('gameHealth', gameState.health + '%');
  e('gameTimer', gameState.timer);
  e('gameLevel', gameState.level);
}

function startGame() {
  gameState = { running:true, score:0, treesPlanted:0, health:100, timer:60, level:1, board:[], interval:null, timerInterval:null };
  initBoard();
  updateGameUI();
  setMessage('🌱 Plant trees! Stop the lumberjacks!');

  // Spawn events
  gameState.interval = setInterval(() => {
    if(!gameState.running) return;
    const emptySlots = gameState.board.map((t,i) => t===CELL_TYPES.EMPTY ? i : -1).filter(i => i>=0);
    const treeSlots = gameState.board.map((t,i) => t===CELL_TYPES.TREE ? i : -1).filter(i => i>=0);
    const r = Math.random();
    if(r < 0.25 && emptySlots.length) {
      // Spawn lumberjack
      const idx = emptySlots[Math.floor(Math.random()*emptySlots.length)];
      gameState.board[idx] = CELL_TYPES.LUMBERJACK;
      setMessage('⚠️ Lumberjack appeared! Click to stop!');
    } else if(r < 0.35 && treeSlots.length) {
      // Spawn fire on a tree
      const idx = treeSlots[Math.floor(Math.random()*treeSlots.length)];
      gameState.board[idx] = CELL_TYPES.FIRE;
      gameState.health = Math.max(0, gameState.health - 5);
      setMessage('🔥 Fire! Click to extinguish!');
    } else if(r < 0.45 && gameState.board.filter(t => t===CELL_TYPES.LUMBERJACK).length > 0) {
      // Lumberjack cuts a tree
      const lumbIdx = gameState.board.map((t,i) => t===CELL_TYPES.LUMBERJACK ? i : -1).filter(i => i>=0);
      if(lumbIdx.length && treeSlots.length) {
        const cutIdx = treeSlots[Math.floor(Math.random()*treeSlots.length)];
        gameState.board[cutIdx] = CELL_TYPES.EMPTY;
        gameState.treesPlanted = Math.max(0, gameState.treesPlanted-1);
        gameState.health = Math.max(0, gameState.health - 3);
      }
    }
    // Level up
    if(gameState.score >= gameState.level * 150) {
      gameState.level++;
      setMessage('🏅 Level ' + gameState.level + '! Harder now!');
    }
    if(gameState.health <= 0) endGame(false);
    updateGameUI();
    renderBoard();
  }, Math.max(600, 1200 - gameState.level * 100));

  // Countdown timer
  gameState.timerInterval = setInterval(() => {
    if(!gameState.running) return;
    gameState.timer--;
    updateGameUI();
    if(gameState.timer <= 0) endGame(true);
  }, 1000);
}

function endGame(timeUp) {
  gameState.running = false;
  clearInterval(gameState.interval);
  clearInterval(gameState.timerInterval);
  const msg = timeUp
    ? `⏱️ Time's up! Score: ${gameState.score} | Trees: ${gameState.treesPlanted} | Level: ${gameState.level}`
    : `💀 Forest destroyed! Score: ${gameState.score}`;
  setMessage(msg);
}

document.getElementById('startGameBtn').addEventListener('click', () => {
  if(!gameState.running) startGame();
});
document.getElementById('resetGameBtn').addEventListener('click', () => {
  clearInterval(gameState.interval);
  clearInterval(gameState.timerInterval);
  gameState.running = false;
  gameState = { running:false, score:0, treesPlanted:0, health:100, timer:60, level:1, board:[], interval:null, timerInterval:null };
  initBoard();
  updateGameUI();
  setMessage('Press Start to begin planting trees! 🌿');
});
initBoard();

/* ============================================================
   CERTIFICATE SYSTEM
   ============================================================ */
function getTierData(trees) {
  if(trees >= 100) return { name:'LEGEND', emoji:'👑', color:'#e63946', subtitle:'OF LEGEND ACHIEVEMENT' };
  if(trees >= 85) return { name:'DIAMOND', emoji:'💠', color:'#0dcaf0', subtitle:'OF PLATINUM ACHIEVEMENT' };
  if(trees >= 70) return { name:'PLATINUM', emoji:'💎', color:'#6b2fa0', subtitle:'OF DIAMOND ACHIEVEMENT' };
  if(trees >= 50) return { name:'GOLD', emoji:'🥇', color:'#d4a017', subtitle:'OF GOLD ACHIEVEMENT' };
  if(trees >= 30) return { name:'SILVER', emoji:'🥈', color:'#a0a0a0', subtitle:'OF SILVER ACHIEVEMENT' };
  return { name:'BRONZE', emoji:'🥉', color:'#cd7f32', subtitle:'OF BRONZE ACHIEVEMENT' };
}

function generateCredentialId() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const seg = n => Array.from({length:n}, () => chars[Math.floor(Math.random()*chars.length)]).join('');
  return `GN-${seg(4)}-${seg(3)}S-${seg(3)}K`;
}

function formatDateDisplay(dateStr) {
  if(!dateStr) return '—';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-IN', { day:'numeric', month:'long', year:'numeric' });
}

// Restrict future dates
window.addEventListener('DOMContentLoaded', () => {
  const today = new Date().toISOString().split('T')[0];
  const certDateInput = document.getElementById('certDate');
  if(certDateInput) certDateInput.setAttribute('max', today);
});

document.getElementById('generateCertBtn').addEventListener('click', generateCertificate);

function generateCertificate() {
  const name   = document.getElementById('certName').value.trim();
  const age    = document.getElementById('certAge').value.trim();
  const gender = document.getElementById('certGender').value;
  const trees  = parseInt(document.getElementById('certTrees').value);
  const date   = document.getElementById('certDate').value;
  const state  = document.getElementById('certState').value.trim() || 'India';

  // Validation
  if(!name)         { alert('Please enter your name.'); return; }
  if(!age || age < 5){ alert('Please enter a valid age.'); return; }
  if(!gender)       { alert('Please select your gender.'); return; }
  if(!trees || trees < 5) { alert('You must plant at least 5 trees to receive a certificate.'); return; }
  if(!date)         { alert('Please select the date of planting.'); return; }
  // Prevent future dates
  const today = new Date().toISOString().split('T')[0];
  if(date > today)  { alert('Date of planting cannot be in the future.'); return; }

  const tier = getTierData(trees);
  const credId = generateCredentialId();
  const credUrl = `https://greenomics.lpu.in/verify/${credId}`;
  const issueDate = formatDateDisplay(date);
  const plantedStr = formatDateDisplay(date);

  // Update certificate elements
  document.getElementById('certMedalIcon').textContent = tier.emoji;
  document.getElementById('certSubtitle').textContent = tier.subtitle;
  document.getElementById('certRecipientName').textContent = name;
  document.getElementById('certMetaLine').innerHTML =
    `Age: <span>${age}</span> · Gender: <span>${gender}</span> · Location: <span>${state}</span>`;
  document.getElementById('certTreeCount').textContent = trees + ' Trees';
  document.getElementById('certPlantedDate').textContent = 'Planted on ' + plantedStr;
  document.getElementById('certIssueDate').textContent = issueDate;
  document.getElementById('certCredId').textContent = credId;

  // Apply tier color to title
  document.getElementById('certSubtitle').style.color = tier.color;
  document.getElementById('certTreeCount').style.color = tier.color;

  // Generate QR Code
  const qrContainer = document.getElementById('certQRCode');
  qrContainer.innerHTML = '';
  new QRCode(qrContainer, {
    text: credUrl,
    width: 80,
    height: 80,
    colorDark: '#1a0e05',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.M
  });

  // Show preview
  document.getElementById('certPreviewWrapper').style.display = 'block';
  setTimeout(() => {
    document.getElementById('certPreviewWrapper').scrollIntoView({ behavior:'smooth', block:'start' });
  }, 200);
}

/* ---- DOWNLOAD PNG ---- */
document.getElementById('downloadPngBtn').addEventListener('click', downloadCertPNG);
function downloadCertPNG() {
  const cert = document.getElementById('certificateDocument');
  // Temporarily expand to full size for rendering
  const origMaxW = cert.style.maxWidth;
  cert.style.maxWidth = 'none';
  html2canvas(cert, {
    scale: 3,
    useCORS: true,
    backgroundColor: '#1a0e05',
    logging: false,
    allowTaint: true
  }).then(canvas => {
    cert.style.maxWidth = origMaxW;
    const link = document.createElement('a');
    link.download = `Greenomics_Certificate_${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  }).catch(err => {
    cert.style.maxWidth = origMaxW;
    console.error('PNG error:', err);
    alert('Could not generate PNG. Please try again.');
  });
}

/* ---- DOWNLOAD PDF (A4 Landscape, full certificate) ---- */
document.getElementById('downloadPdfBtn').addEventListener('click', downloadCertPDF);
function downloadCertPDF() {
  const cert = document.getElementById('certificateDocument');
  // Save current dimensions
  const origStyle = cert.getAttribute('style') || '';
  // Force exact A4 landscape pixel size for capture
  const A4W_PX = 1123;
  const A4H_PX = 794;
  cert.style.width  = A4W_PX + 'px';
  cert.style.height = A4H_PX + 'px';
  cert.style.maxWidth = 'none';
  cert.style.aspectRatio = 'unset';

  html2canvas(cert, {
    scale: 2,
    useCORS: true,
    width: A4W_PX,
    height: A4H_PX,
    backgroundColor: '#1a0e05',
    logging: false,
    allowTaint: true
  }).then(canvas => {
    // Restore
    cert.setAttribute('style', origStyle);

    const imgData = canvas.toDataURL('image/png', 1.0);
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ orientation:'landscape', unit:'mm', format:'a4' });
    // A4 landscape: 297mm x 210mm
    pdf.addImage(imgData, 'PNG', 0, 0, 297, 210, '', 'FAST');
    pdf.save(`Greenomics_Certificate_${Date.now()}.pdf`);
  }).catch(err => {
    cert.setAttribute('style', origStyle);
    console.error('PDF error:', err);
    alert('Could not generate PDF. Please try again.');
  });
}

/* ============================================================
   INTERSECTION OBSERVER — Animate on scroll
   ============================================================ */
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.about-card, .effect-card, .aware-card, .un-goal-card, .affected-card, .scheme-card, .story-stat-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

