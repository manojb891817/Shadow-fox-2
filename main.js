// Player performance data
const playersByYear = {
  2016: {
    name: 'Virat Kohli',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Virat_Kohli.jpg',
    performance: '973 runs in IPL 2016 – Orange Cap Winner'
  },
  2019: {
    name: 'AB de Villiers',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/AB_de_Villiers.jpg',
    performance: 'Top scorer and match-winner in multiple games'
  },
  2021: {
    name: 'Glenn Maxwell',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Glenn_Maxwell.jpg',
    performance: '513 runs with a strike rate of 144'
  }
};

// Search function to display player info
function searchPlayer() {
  const year = document.getElementById('yearInput').value.trim();
  const playerSection = document.getElementById('playerInfo');

  if (playersByYear[year]) {
    const player = playersByYear[year];
    playerSection.innerHTML = `
      <h2>${player.name}</h2>
      <img src="${player.photo}" alt="${player.name}" style="max-width:200px; border-radius:8px; margin: 1rem 0;" />
      <p>${player.performance}</p>
    `;
  } else {
    playerSection.innerHTML = `<p>No data available for ${year}</p>`;
  }
}

window.addEventListener('load', () => {
  gsap.registerPlugin(ScrollTrigger);

  // Logo animation
  gsap.from(".logo", {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "bounce.out"
  });

  // Nav items animation
  gsap.from(".nav-link", {
    duration: 1,
    x: 100,
    opacity: 0,
    stagger: 0.2
  });

  // Scroll-triggered video animation
  gsap.from(".video-block iframe", {
    scrollTrigger: {
      trigger: ".video-gallery",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3
  });

  // 3D page load animation for #page-wrapper
  gsap.from("#page-wrapper", {
    duration: 1.5,
    opacity: 0,
    rotationX: 15,
    rotationY: -15,
    transformOrigin: "center center",
    ease: "power4.out"
  });

  // Hover trending animation on video blocks
  const videoBlocks = document.querySelectorAll('.video-block');

  videoBlocks.forEach(block => {
    const badge = document.createElement('div');
    badge.classList.add('trending-badge');
    badge.textContent = 'TRENDING';
    block.style.position = 'relative';
    block.appendChild(badge);

    block.addEventListener('mouseenter', () => {
      gsap.to(block, {
        scale: 1.05,
        boxShadow: '0 15px 25px rgba(255, 204, 0, 0.7)',
        duration: 0.4,
        ease: 'power3.out',
        zIndex: 10,
      });
      gsap.to(badge, {opacity: 1, duration: 0.3});
    });

    block.addEventListener('mouseleave', () => {
      gsap.to(block, {
        scale: 1,
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        duration: 0.4,
        ease: 'power3.out',
        zIndex: 1,
      });
      gsap.to(badge, {opacity: 0, duration: 0.3});
    });
  });
});
const rcbHistory = {
  2008: { season: "Playoffs (3rd Place)", wins: 10, losses: 7, topScorer: "Jacques Kallis (472 runs)", highlight: "Qualified for first-ever IPL playoffs." },
  2009: { season: "Group Stage", wins: 5, losses: 7, topScorer: "Rahul Dravid (358 runs)", highlight: "Second season struggled with consistency." },
  2010: { season: "Group Stage", wins: 7, losses: 7, topScorer: "Virat Kohli (307 runs)", highlight: "Kohli’s debut IPL season." },
  2011: { season: "Group Stage", wins: 6, losses: 8, topScorer: "Virat Kohli (557 runs)", highlight: "Kohli emerged as the top run-getter for RCB." },
  2012: { season: "Runners-Up", wins: 12, losses: 8, topScorer: "Chris Gayle (733 runs)", highlight: "Chris Gayle scored a record 175* in one innings." },
  2013: { season: "Runners-Up", wins: 11, losses: 8, topScorer: "Chris Gayle (708 runs)", highlight: "Consistent batting from Gayle." },
  2014: { season: "Group Stage", wins: 6, losses: 8, topScorer: "AB de Villiers (395 runs)", highlight: "Kohli scored first IPL century this season." },
  2015: { season: "Group Stage", wins: 7, losses: 7, topScorer: "AB de Villiers (513 runs)", highlight: "Strong batting performances but missed playoffs." },
  2016: { season: "Runners-Up", wins: 9, losses: 5, topScorer: "Virat Kohli (973 runs)", highlight: "Kohli scored 4 centuries in a single season." },
  2017: { season: "Group Stage", wins: 5, losses: 9, topScorer: "Virat Kohli (308 runs)", highlight: "Kohli was captain but team underperformed." },
  2018: { season: "Group Stage", wins: 6, losses: 8, topScorer: "Parthiv Patel (360 runs)", highlight: "Transition year with new players." },
  2019: { season: "Group Stage", wins: 6, losses: 8, topScorer: "Devdutt Padikkal (473 runs)", highlight: "Young talent Devdutt Padikkal impressed." },
  2020: { season: "Playoffs", wins: 7, losses: 7, topScorer: "Devdutt Padikkal (473 runs)", highlight: "Qualified for playoffs after 4 years." },
  2021: { season: "Group Stage", wins: 7, losses: 7, topScorer: "Glenn Maxwell (513 runs)", highlight: "Maxwell was the highest run scorer." },
  2022: { season: "Playoffs (3rd Place)", wins: 8, losses: 6, topScorer: "Faf du Plessis (468 runs)", highlight: "Defeated LSG in Eliminator." },
  2023: { season: "Group Stage", wins: 7, losses: 7, topScorer: "Faf du Plessis (552 runs)", highlight: "Strong middle-order batting." },
  2024: { season: "Playoffs", wins: 8, losses: 6, topScorer: "Virat Kohli (741 runs)", highlight: "Kohli won the Orange Cap." },
  2025: { season: "Champions", wins: 10, losses: 4, topScorer: "Faf du Plessis (670 runs)", highlight: "RCB won their first IPL title, defeating the defending champions in the final." }
};

function searchPlayer() {
  const year = document.getElementById('yearInput').value.trim();
  const resultDiv = document.getElementById('yearResult'); // show result here

  if (playersByYear[year]) {
    const player = playersByYear[year];
    resultDiv.innerHTML = `
      <h2>${player.name}</h2>
      <img src="${player.photo}" alt="${player.name}" style="max-width:200px; border-radius:8px; margin: 1rem 0;" />
      <p>${player.performance}</p>
    `;
  } else {
    resultDiv.innerHTML = `<p>No data available for ${year}</p>`;
  }
}


