// players.js
(function () {
    
  document.addEventListener('DOMContentLoaded', () => {
    // --- Player performance database (use the object you supplied) ---
    const batters = [
  {
    pos: 1, name: "Virat Kohli", team: "RCB",
    runs: 8661, mat: 259, inns: '-', no: '-',
    hs: "113", avg: '-', bf: '-', sr: '-',
    hundreds: '8', fifties: '63', fours: '771', sixes: '291'
  },
  {
    pos: 2, name: "Phil Salt", team: "RCB",
    runs: 1500, mat: 55, inns: '-',
    no: '-', hs: "82", avg: '-', bf: '-', sr: '-',
    hundreds: '-', fifties: '-', fours: '-', sixes: '-'
  },
  {
    pos: 3, name: "Rajat Patidar", team: "RCB",
    runs: 1400, mat: 52, inns: '-', no: '-',
    hs: "86", avg: '-', bf: '-', sr: '-',
    hundreds: '-', fifties: '-', fours: '-', sixes: '-'
  },
  {
    pos: 4, name: "Devdutt Padikkal", team: "RCB",
    runs: 2800, mat: 85, inns: '-',
    no: '-', hs: "101", avg: '-', bf: '-', sr: '-',
    hundreds: '-', fifties: '-', fours: '-', sixes: '-'
  },
  {
    pos: 5, name: "Mayank Agarwal", team: "RCB",
    runs: 3300, mat: 125, inns: '-',
    no: '-', hs: "89", avg: '-', bf: '-', sr: '-',
    hundreds: '-', fifties: '-', fours: '-', sixes: '-'
  },
  {
    pos: 6, name: "Swastik", team: "RCB",
    runs: 450, mat: 20, inns: '-',
    no: '-', hs: "68", avg: '-', bf: '-', sr: '-',
    hundreds: '-', fifties: '-', fours: '-', sixes: '-'
  },
  {
    pos: 7, name: "David Warner", team: "RCB",
    runs: 6500, mat: 200, inns: '-', no: '-',
    hs: "126", avg: '-', bf: '-', sr: '-',
    hundreds: '-', fifties: '-', fours: '-', sixes: '-'
  },
];

const allrounders = [
  {
    pos: 1, name: "Liam Livingstone", team: "RCB",
    runs: 1700, mat: 67, inns: '-',
    no: '-', hs: "95", avg: '-', bf: '-', sr: '-',
    hundreds: '-', fifties: '-', fours: '-', sixes: '-',
    wickets: 22, eco: '-'
  },
  {
    pos: 2, name: "Krunal Pandya", team: "RCB",
    runs: 2500, mat: 150, inns: '-',
    no: '-', hs: "91", avg: '-', bf: '-', sr: '-',
    hundreds: '-', fifties: '-', fours: '-', sixes: '-',
    wickets: 120, eco: '-'
  },
  {
    pos: 3, name: "Suyash Prabhudessai", team: "RCB",
    runs: 480, mat: 25, inns: '-',
    no: '-', hs: "72", avg: '-', bf: '-', sr: '-',
    hundreds: '-', fifties: '-', fours: '-', sixes: '-',
    wickets: 8, eco: '-'
  },
  {
    pos: 4, name: "Romario Shepherd", team: "RCB",
    runs: 800, mat: 45, inns: '-',
    no: '-', hs: "78", avg: '-', bf: '-', sr: '-',
    hundreds: '-', fifties: '-', fours: '-', sixes: '-',
    wickets: 25, eco: '-'
  },
  {
    pos: 5, name: "Abhi", team: "RCB",
    runs: 90, mat: 5, inns: '-',
    no: '-', hs: "50", avg: '-', bf: '-', sr: '-',
    hundreds: '-', fifties: '-', fours: '-', sixes: '-',
    wickets: 2, eco: '-'
  },
  {
    pos: 6, name: "Rasik", team: "RCB",
    runs: 120, mat: 8, inns: '-',
    no: '-', hs: "60", avg: '-', bf: '-', sr: '-',
    hundreds: '-', fifties: '-', fours: '-', sixes: '-',
    wickets: 3, eco: '-'
  },
  {
    pos: 7, name: "Rajesh", team: "RCB",
    runs: 95, mat: 6, inns: '-',
    no: '-', hs: "55", avg: '-', bf: '-', sr: '-',
    hundreds: '-', fifties: '-', fours: '-', sixes: '-',
    wickets: 2, eco: '-'
  },
  {
    pos: 8, name: "Swapnil", team: "RCB",
    runs: 180, mat: 10, inns: '-',
    no: '-', hs: "45", avg: '-', bf: '-', sr: '-',
    hundreds: '-', fifties: '-', fours: '-', sixes: '-',
    wickets: 5, eco: '-'
  },
];

const bowlers = [
  {
    pos: 1, name: "Yash Dayal", team: "RCB",
    runs: 150, mat: 60, inns: '-',
    no: '-', hs: "10", avg: '-', bf: '-', sr: '-',
    hundreds: '-', fifties: '-', fours: '-', sixes: '-',
    wickets: 80, eco: '-'
  },
  {
    pos: 2, name: "Josh Hazlewood", team: "RCB",
    runs: 200, mat: 120, inns: '-',
    no: '-', hs: "12", avg: '-', bf: '-', sr: '-',
    hundreds: '-', fifties: '-', fours: '-', sixes: '-',
    wickets: 145, eco: '-'
  },
  {
    pos: 3, name: "Lungi Ngidi", team: "RCB",
    runs: 100, mat: 50, inns: '-',
    no: '-', hs: "8", avg: '-', bf: '-', sr: '-',
    hundreds: '-', fifties: '-', fours: '-', sixes: '-',
    wickets: 65, eco: '-'
  },
  {
    pos: 4, name: "Bhuvneshwar Kumar", team: "RCB",
    runs: 300, mat: 180, inns: '-',
    no: '-', hs: "14", avg: '-', bf: '-', sr: '-',
    hundreds: '-', fifties: '-', fours: '-', sixes: '-',
    wickets: 180, eco: '-'
  },
  {
    pos: 5, name: "Blessing Muzarabani", team: "RCB",
    runs: 50, mat: 40, inns: '-',
    no: '-', hs: "5", avg: '-', bf: '-', sr: '-',
    hundreds: '-', fifties: '-', fours: '-', sixes: '-',
    wickets: 55, eco: '-'
  },
  {
    pos: 6, name: "Mohit Rathee", team: "RCB",
    runs: 20, mat: 15, inns: '-',
    no: '-', hs: "7", avg: '-', bf: '-', sr: '-',
    hundreds: '-', fifties: '-', fours: '-', sixes: '-',
    wickets: 12, eco: '-'
  },
];
const playersInfo = {};
[...batters, ...allrounders, ...bowlers].forEach(p => {
  const key = (p.name || '').toUpperCase().trim();
  playersInfo[key] = {
    role: p.team || p.role || '',
    summary: p.summary || '',
    matches: p.mat ?? p.matches ?? '-',
    runs: p.runs ?? '-',
    wickets: p.wkts ?? p.wickets ?? '-',
    highScore: p.hs ?? p.highScore ?? '-',
    cricbuzz: p.cricbuzz || ('https://www.cricbuzz.com/search?q=' + encodeURIComponent(p.name))
  };
});


    // --- Modal creation ---
    function createModal() {
      if (document.getElementById('playerModalCustom')) return;

      const modal = document.createElement('div');
      modal.id = 'playerModalCustom';
      modal.className = 'player-modal';
      modal.setAttribute('aria-hidden', 'true');

      modal.innerHTML = `
        <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="modalPlayerName">
          <button id="back-btn-modal" class="back-btn" aria-label="Back">← Back</button>
          <span id="close-modal" class="close-btn" role="button" aria-label="Close">&times;</span>
          <div class="player-bio" style="display:flex; gap:16px; flex-wrap:wrap;">
            <div class="player-image" style="flex:0 0 240px;">
              <img id="modalPlayerImage" src="" alt="Player Image" style="width:100%; height:auto; border-radius:6px;">
            </div>
            <div class="player-details" style="flex:1; min-width:220px;">
              <h2 id="modalPlayerName"></h2>
              <p id="modalPlayerRole" style="font-weight:600; margin:6px 0;"></p>
              <div id="modalPlayerSummary" style="margin:8px 0; color:#333;"></div>
              <div id="modalPlayerStats" class="stats-grid" style="display:flex; gap:10px; flex-wrap:wrap; margin-top:12px;"></div>
              <p style="margin-top:12px;">
                <a id="modalCricbuzzLink" href="#" target="_blank" rel="noopener noreferrer">Open full profile on Cricbuzz</a>
              </p>
            </div>
          </div>
        </div>
      `;

      document.body.appendChild(modal);

      // close handlers
      const closeBtn = document.getElementById('close-modal');
      const backBtn = document.getElementById('back-btn-modal');

      closeBtn.addEventListener('click', closeModal);
      backBtn.addEventListener('click', closeModal);

      // click outside to close
      modal.addEventListener('click', (ev) => {
        if (ev.target === modal) closeModal();
      });
    }

    // --- Utility helpers ---
    function normalizeName(name) {
      if (!name) return '';
      return name.replace(/\s+/g, ' ').trim().toUpperCase();
    }

    function extractNameFromCard(card) {
      if (!card) return '';
      const p = card.querySelector('p');
      if (p && p.innerText.trim()) {
        // if there's a <br> with role, split by newline and take first line
        const txt = p.innerText.trim();
        return txt.split('\n')[0].trim();
      }
      const img = card.querySelector('img');
      if (img && img.alt) return img.alt.trim();
      // fallback to dataset name if present
      if (card.dataset && card.dataset.name) return card.dataset.name.trim();
      return '';
    }

    function buildStatsHTML(info) {
      const stats = [
        { label: 'Matches', value: info.matches ?? '-' },
        { label: 'Runs', value: info.runs ?? '-' },
        { label: 'Wickets', value: info.wickets ?? '-' },
        { label: 'Highest', value: info.highScore ?? '-' }
      ];
      return stats.map(s => `
        <div class="stat-box" style="background:#f0f0f0; padding:10px; border-radius:6px; min-width:100px; text-align:center;">
          <div style="font-weight:700; color:#111;">${s.value}</div>
          <div style="font-size:12px; color:#666;">${s.label}</div>
        </div>
      `).join('');
    }

    // --- Open modal with player data ---
    function openModalWithData(name, imgSrc, infoObj) {
      createModal();
      const modal = document.getElementById('playerModalCustom');
      document.getElementById('modalPlayerName').textContent = name;
      document.getElementById('modalPlayerImage').src = imgSrc || 'rcb-logo-png_seeklogo-531612.png';
      document.getElementById('modalPlayerImage').alt = name;

      if (infoObj) {
        document.getElementById('modalPlayerRole').textContent = infoObj.role || '';
        document.getElementById('modalPlayerSummary').textContent = infoObj.summary || '';
        document.getElementById('modalPlayerStats').innerHTML = buildStatsHTML(infoObj);
        document.getElementById('modalCricbuzzLink').href = infoObj.cricbuzz || ('https://www.cricbuzz.com/search?q=' + encodeURIComponent(name));
      } else {
        document.getElementById('modalPlayerRole').textContent = '';
        document.getElementById('modalPlayerSummary').innerHTML = `No stored stats for ${name}. Use the link below to view more information.`;
        document.getElementById('modalPlayerStats').innerHTML = '';
        document.getElementById('modalCricbuzzLink').href = 'https://www.cricbuzz.com/search?q=' + encodeURIComponent(name);
      }

      // show modal
      modal.style.display = 'block';
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      // optional nice animation if GSAP is present
      if (window.gsap) {
        const content = modal.querySelector('.modal-content');
        gsap.fromTo(content, { y: 30, opacity: 0, scale: 0.98 }, { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out' });
      }
    }

    function closeModal() {
      const modal = document.getElementById('playerModalCustom');
      if (!modal) return;
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    // --- Event delegation for clicks on cards ---
    document.addEventListener('click', (ev) => {
      // ignore clicks inside modal (close/back handled separately)
      if (ev.target.closest('#playerModalCustom')) return;

      const card = ev.target.closest('.player-card, .staff-card');
      if (!card) return;

      // avoid triggering when clicking an actual link or button inside card
      if (ev.target.closest('a, button')) return;

      ev.preventDefault();

      const name = extractNameFromCard(card) || '';
      const normalized = normalizeName(name);
      const imgEl = card.querySelector('img');
      const imgSrc = imgEl ? (imgEl.getAttribute('data-src') || imgEl.src) : '';

      const info = playersInfo[normalized] || null;

      // open modal with found info or fallback
      openModalWithData(name || 'Player', imgSrc, info);
    });

    // close on ESC
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    // safety: if navigation "Home" link exists, ensure it navigates normally
    const homeLink = document.querySelector('a.nav-link[href="index.html"], a.home-link, a[href="index.html"]');
    if (homeLink) {
      homeLink.addEventListener('click', (e) => {
        // normal navigation - no special SPA behavior
      });
    }

    // That's it — script doesn't alter your existing DOM, only adds modal/behavior.
  });
})();

