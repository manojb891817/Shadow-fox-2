// stats.js

const batters = [
  {
    pos: 1, name: "Virat Kohli", team: "RCB", runs: 657, mat: 15, inns: 15, no: 3,
    hs: "73*", avg: 54.75, bf: 454, sr: 144.71, hundreds: 0, fifties: 8, fours: 66, sixes: 19
  },
  {
    pos: 2, name: "Phil Salt", team: "RCB", runs: 400, mat: 13, inns: 13, no: 1,
    hs: "82*", avg: 38.46, bf: 340, sr: 117.65, hundreds: 0, fifties: 4, fours: 45, sixes: 25
  },
  {
    pos: 3, name: "Rajat Patidar", team: "RCB", runs: 504, mat: 14, inns: 14, no: 1,
    hs: "80*", avg: 43.67, bf: 385, sr: 131.0, hundreds: 0, fifties: 4, fours: 54, sixes: 21
  },
  {
    pos: 4, name: "Devdutt Padikkal", team: "RCB", runs: 460, mat: 15, inns: 15, no: 2,
    hs: "65*", avg: 35.38, bf: 410, sr: 112.19, hundreds: 0, fifties: 3, fours: 48, sixes: 15
  },
  {
    pos: 5, name: "Mayank Agarwal", team: "RCB", runs: 300, mat: 10, inns: 10, no: 0,
    hs: "70", avg: 30.0, bf: 280, sr: 107.14, hundreds: 0, fifties: 2, fours: 35, sixes: 10
  },
  {
    pos: 6, name: "Jitesh Sharma", team: "RCB", runs: 200, mat: 8, inns: 8, no: 1,
    hs: "65*", avg: 28.57, bf: 190, sr: 105.26, hundreds: 0, fifties: 1, fours: 20, sixes: 8
  },
];

const allrounders = [
  {
    pos: 1, name: "Tim David", team: "RCB", runs: 350, mat: 12, inns: 11, no: 2,
    hs: "85*", avg: 38.88, bf: 320, sr: 109.37, hundreds: 0, fifties: 3, fours: 30, sixes: 22,
    wickets: 10, eco: 7.8
  },
  {
    pos: 2, name: "Liam Livingstone", team: "RCB", runs: 500, mat: 14, inns: 13, no: 2,
    hs: "81*", avg: 42.5, bf: 380, sr: 131.57, hundreds: 0, fifties: 5, fours: 50, sixes: 22,
    wickets: 22, eco: 7.2
  },
  {
    pos: 3, name: "Krunal Pandya", team: "RCB", runs: 300, mat: 12, inns: 11, no: 3,
    hs: "50*", avg: 30.0, bf: 270, sr: 111.11, hundreds: 0, fifties: 2, fours: 30, sixes: 10,
    wickets: 15, eco: 7.5
  },
  {
    pos: 4, name: "Romario Shepherd", team: "RCB", runs: 280, mat: 11, inns: 10, no: 1,
    hs: "78", avg: 28.0, bf: 250, sr: 112.0, hundreds: 0, fifties: 2, fours: 25, sixes: 15,
    wickets: 12, eco: 7.9
  },
  {
    pos: 5, name: "Rasik", team: "RCB", runs: 120, mat: 8, inns: 7, no: 2,
    hs: "60", avg: 30.0, bf: 110, sr: 109.09, hundreds: 0, fifties: 1, fours: 12, sixes: 6,
    wickets: 5, eco: 8.0
  },
];

const bowlers = [
  {
    pos: 1, name: "Yash Dayal", team: "RCB", runs: 20, mat: 14, inns: 14, no: 0,
    hs: "-", avg: 0, bf: 0, sr: 0, hundreds: 0, fifties: 0, fours: 0, sixes: 0,
    wickets: 30, eco: 7.1
  },
  {
    pos: 2, name: "Josh Hazlewood", team: "RCB", runs: 50, mat: 14, inns: 14, no: 0,
    hs: "-", avg: 0, bf: 0, sr: 0, hundreds: 0, fifties: 0, fours: 0, sixes: 0,
    wickets: 25, eco: 6.5
  },
  {
    pos: 3, name: "Bhuvneshwar Kumar", team: "RCB", runs: 30, mat: 14, inns: 14, no: 0,
    hs: "-", avg: 0, bf: 0, sr: 0, hundreds: 0, fifties: 0, fours: 0, sixes: 0,
    wickets: 20, eco: 6.8
  },
  {
    pos: 4, name: "Suyash Prabhudessai", team: "RCB", runs: 10, mat: 10, inns: 9, no: 1,
    hs: "45", avg: 11.11, bf: 50, sr: 20.0, hundreds: 0, fifties: 0, fours: 3, sixes: 1,
    wickets: 5, eco: 7.5
  },
  {
    pos: 5, name: "Nuwan", team: "RCB", runs: 5, mat: 7, inns: 5, no: 0,
    hs: "12", avg: 5.0, bf: 15, sr: 33.33, hundreds: 0, fifties: 0, fours: 1, sixes: 0,
    wickets: 3, eco: 8.0
  },
  {
    pos: 6, name: "Lungi Ngidi", team: "RCB", runs: 10, mat: 8, inns: 8, no: 0,
    hs: "-", avg: 0, bf: 0, sr: 0, hundreds: 0, fifties: 0, fours: 0, sixes: 0,
    wickets: 15, eco: 7.3
  },
];

// Map player names to image filenames
const playerImageMap = {
  "Virat Kohli": "vk (2)_0.png",
  "Phil Salt": "salt (2)_0.png",
  "Rajat Patidar": "Rajat (1)_0.png",
  "Devdutt Padikkal": "padikkal (1).png",
  "Mayank Agarwal": "Mayank Agarawal.png",
  "Jitesh Sharma": "jitesh (1).png",
  "Tim David": "david_0.png",
  "Liam Livingstone": "livingstone.png",
  "Krunal Pandya": "krunal_0.png",
  "Romario Shepherd": "romario.png",
  "Rasik": "rasik.png",
  "Yash Dayal": "dayal.png",
  "Josh Hazlewood": "hazelwood (1)_0.png",
  "Bhuvneshwar Kumar": "bhuvi (2).png",
  "Suyash Prabhudessai": "suyash (1).png",
  "Nuwan": "nuwan.png",
  "Lungi Ngidi": "lungi (2)_0.png",
};

function renderCategory(players) {
  const container = document.getElementById("statsContainer");

  let tableHTML = `
    <table>
      <thead>
        <tr>
          <th>POS</th>
          <th>Player</th>
          <th>Runs</th>
          <th>Mat</th>
          <th>Inns</th>
          <th>NO</th>
          <th>HS</th>
          <th>Avg</th>
          <th>SR</th>
          <th>100</th>
          <th>50</th>
          <th>4s</th>
          <th>6s</th>
          <th>Wickets</th>
          <th>Eco</th>
        </tr>
      </thead>
      <tbody>
  `;

  players.forEach(p => {
    tableHTML += `
      <tr>
        <td>${p.pos}</td>
        <td class="player-info">
          <img src="${playerImageMap[p.name]}" alt="${p.name}" />
          <div>
            <div class="player-name">${p.name}</div>
            <div class="player-team">${p.team}</div>
          </div>
        </td>
        <td><b>${p.runs}</b></td>
        <td>${p.mat}</td>
        <td>${p.inns}</td>
        <td>${p.no}</td>
        <td>${p.hs}</td>
        <td>${p.avg}</td>
        <td>${p.sr}</td>
        <td>${p.hundreds}</td>
        <td>${p.fifties}</td>
        <td>${p.fours}</td>
        <td>${p.sixes}</td>
        <td>${p.wickets !== undefined ? p.wickets : "-"}</td>
        <td>${p.eco !== undefined ? p.eco : "-"}</td>
      </tr>
    `;
  });

  tableHTML += "</tbody></table>";

  container.innerHTML = tableHTML;
}

document.getElementById("battersBtn").addEventListener("click", () => {
  renderCategory(batters);
  switchActive("battersBtn");
});

document.getElementById("allroundBtn").addEventListener("click", () => {
  renderCategory(allrounders);
  switchActive("allroundBtn");
});

document.getElementById("bowlersBtn").addEventListener("click", () => {
  renderCategory(bowlers);
  switchActive("bowlersBtn");
});

function switchActive(activeId) {
  ["battersBtn", "allroundBtn", "bowlersBtn"].forEach(id => {
    document.getElementById(id).classList.toggle("active", id === activeId);
  });
}

// Load default view
renderCategory(batters);

// You can implement searchPlayer() later or remove the search box if unused.
