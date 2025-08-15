const matches = [
    { date: "Mar 22, 2025", team1: "aa5 RCB.png", team2: "aa9 KKR.png", result: "RCB won", score: "KKR 174/8 (20), RCB 177/3 (16.2)" },
    { date: "Mar 28, 2025", team1: "aa5 RCB.png", team2: "aa10 CSK.png", result: "RCB won", score: "RCB 196/7 (20), CSK 146/8 (20)" },
    { date: "Apr 02, 2025", team1: "aa5 RCB.png", team2: "aa3 GT.png", result: "GT won", score: "RCB 169/8 (20), GT 170/2 (17.5)" },
    { date: "Apr 07, 2025", team1: "aa5 RCB.png", team2: "aa7  MI.png", result: "RCB won", score: "RCB 221/5 (20), MI 209/9 (20)" },
    { date: "Apr 10, 2025", team1: "aa5 RCB.png", team2: "aa1 DELHI.jpg", result: "DC won", score: "RCB 163/7 (20), DC 169/4 (17.5)" },
    { date: "Apr 13, 2025", team1: "aa5 RCB.png", team2: "aa2 RR.png", result: "RCB won", score: "RR 173/4 (20), RCB 175/1 (17.3)" },
    { date: "Apr 18, 2025", team1: "aa5 RCB.png", team2: "aa6 PBKS.png", result: "PBKS won", score: "RCB 95/9 (14), PBKS 98/5 (12.1)" },
    { date: "Apr 20, 2025", team1: "aa6 PBKS.png", team2: "aa5 RCB.png", result: "RCB won", score: "PBKS 157/6 (20), RCB 159/3 (18.5)" },
    { date: "Apr 24, 2025", team1: "aa5 RCB.png", team2: "aa2 RR.png", result: "RCB won", score: "RCB 205/5 (20), RR 194/9 (20)" },
    { date: "Apr 27, 2025", team1: "aa1 DELHI.jpg", team2: "aa5 RCB.png", result: "RCB won", score: "DC 162/8 (20), RCB 165/4 (18.3)" },
    { date: "May 03, 2025", team1: "aa5 RCB.png", team2: "aa10 CSK.png", result: "RCB won", score: "RCB 213/5 (20), CSK 211/5 (20)" },
    { date: "May 17, 2025", team1: "aa9 KKR.png", team2: "aa5 RCB.png", result: "Abandoned (No Result)", score: "-" },
    { date: "May 23, 2025", team1: "aa4 SRH.png", team2: "aa5 RCB.png", result: "SRH won", score: "SRH 231/6 (20), RCB 189/10 (19.5)" },
    { date: "May 27, 2025", team1: "aa8 LSG.png", team2: "aa5 RCB.png", result: "RCB won", score: "LSG 227/3 (20), RCB 230/4 (18.4)" },
    { date: "May 29, 2025", team1: "aa6 PBKS.png", team2: "aa5 RCB.png", result: "RCB won", score: "PBKS 101/10 (14.1), RCB 106/2 (10)" },
    { date: "Jun 03, 2025", team1: "aa5 RCB.png", team2: "aa6 PBKS.png", result: "RCB won", score: "RCB 190/9 (20), PBKS 184/7 (20)" }
];

const tableBody = document.querySelector("#schedule tbody");

matches.forEach(match => {
    const row = document.createElement("tr");

    // Date
    const dateCell = document.createElement("td");
    dateCell.textContent = match.date;
    row.appendChild(dateCell);

    // Match logos
    const matchCell = document.createElement("td");
    matchCell.classList.add("match-cell");

    const team1Logo = document.createElement("img");
    team1Logo.src = match.team1;
    team1Logo.alt = match.team1;
    team1Logo.classList.add("team-logo");

    const vsText = document.createElement("span");
    vsText.textContent = "vs";

    const team2Logo = document.createElement("img");
    team2Logo.src = match.team2;
    team2Logo.alt = match.team2;
    team2Logo.classList.add("team-logo");

    matchCell.appendChild(team1Logo);
    matchCell.appendChild(vsText);
    matchCell.appendChild(team2Logo);
    row.appendChild(matchCell);

    // Result + Score
    const resultCell = document.createElement("td");
    resultCell.textContent = `${match.result}${match.score ? " - " + match.score : ""}`;
    row.appendChild(resultCell);

    tableBody.appendChild(row);
});

// Animate rows
document.addEventListener("DOMContentLoaded", () => {
    const rows = document.querySelectorAll("table tbody tr");
    rows.forEach((row, index) => {
        row.style.animationDelay = `${index * 0.1}s`;
    });
});
