document.addEventListener('DOMContentLoaded', function() {
  // Initialize poll percentages
  updatePollFills();
  
  // Auto-scroll for polls container
  const pollsContainer = document.querySelector('.polls-container');
  let scrollDirection = 1;
  const scrollStep = 1;
  let animationFrameId = null;

  function autoScrollPolls() {
    if (!pollsContainer) return;

    const maxScrollTop = pollsContainer.scrollHeight - pollsContainer.clientHeight;
    let currentScroll = pollsContainer.scrollTop;

    if (currentScroll >= maxScrollTop) {
      scrollDirection = -1;
    } else if (currentScroll <= 0) {
      scrollDirection = 1;
    }

    pollsContainer.scrollTop = currentScroll + scrollStep * scrollDirection;
    animationFrameId = requestAnimationFrame(autoScrollPolls);
  }

  // Start auto scroll
  animationFrameId = requestAnimationFrame(autoScrollPolls);

  // Pause on hover
  pollsContainer.addEventListener('mouseenter', () => {
    if(animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  });

  pollsContainer.addEventListener('mouseleave', () => {
    if(!animationFrameId) {
      animationFrameId = requestAnimationFrame(autoScrollPolls);
    }
  });

  // Video hover play/pause
  const videos = document.querySelectorAll('.scroll-video');
  videos.forEach(video => {
    video.addEventListener('mouseenter', () => {
      video.play();
    });
    video.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  });
});

function updatePollFills() {
  const pollOptions = document.querySelectorAll('.poll-option');
  pollOptions.forEach(option => {
    const percSpan = option.querySelector('.percentage');
    if (!percSpan) return;
    const percValue = parseInt(percSpan.textContent);
    if (!isNaN(percValue)) {
      option.style.setProperty('--fill-width', percValue + '%');
    }
  });
}

function searchPlayer() {
  const year = document.getElementById('yearInput').value;
  alert(`Searching for players from year: ${year}`);
  // In a real application, you would implement actual search functionality here
}
// Carousel navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.reaction-videos-container');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  
  if (carousel && prevBtn && nextBtn) {
    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({
        left: window.innerWidth,
        behavior: 'smooth'
      });
    });
    
    prevBtn.addEventListener('click', () => {
      carousel.scrollBy({
        left: -window.innerWidth,
        behavior: 'smooth'
      });
    });
  }
});