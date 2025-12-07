document.addEventListener('astro:page-load', () => {
  // Get certifications data from the page
  const certifications = JSON.parse(document.getElementById('certifications-data')?.textContent || '[]');

  // Initialize certification carousel
  const carouselContainers = document.querySelectorAll('.certification-carousel-container');

  carouselContainers.forEach(container => {
    const slides = container.querySelectorAll('.certification-slide');
    const prevBtn = container.querySelector('.certification-nav.prev');
    const nextBtn = container.querySelector('.certification-nav.next');
    const dotsContainer = container.querySelector('.certification-progress');
    let currentIndex = 0;
    let interval;

    // Create dots for progress indicator
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('certification-dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.certification-dot');

    function updateCarousel() {
      // Position all slides side by side
      const slideWidth = slides[0]?.offsetWidth || 300;
      const container = slides[0]?.parentElement;

      if (container) {
        container.style.width = `${slideWidth * slides.length}px`;
        container.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
      }

      slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentIndex);
        slide.style.opacity = index === currentIndex ? '1' : '0.7';
        slide.style.flexShrink = '0';
        slide.style.width = `${slideWidth}px`;
      });

      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }

    function goToSlide(index) {
      currentIndex = index;
      updateCarousel();
      resetInterval();
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    }

    function resetInterval() {
      clearInterval(interval);
      interval = setInterval(nextSlide, 3000);
    }

    // Initialize
    updateCarousel();
    resetInterval();

    // Add event listeners
    if (nextBtn) nextBtn.addEventListener('click', () => {
      nextSlide();
      resetInterval();
    });

    if (prevBtn) prevBtn.addEventListener('click', () => {
      prevSlide();
      resetInterval();
    });

    // Pause on hover
    container.addEventListener('mouseenter', () => clearInterval(interval));
    container.addEventListener('mouseleave', resetInterval);

    // Add click handlers for modal
    slides.forEach(slide => {
      const link = slide.querySelector('a');
      slide.addEventListener('click', (e) => {
        // Prevent link navigation, show modal instead
        e.preventDefault();
        e.stopPropagation();

        const modal = document.getElementById('certification-modal');
        const modalTitle = modal.querySelector('.certification-modal-title');
        const modalImage = modal.querySelector('.certification-modal-image');
        const modalDescription = modal.querySelector('.certification-modal-description');
        const modalUrl = modal.querySelector('.certification-modal-url');

        const title = slide.querySelector('h3').textContent;
        const image = slide.querySelector('img').src;
        const url = link.href;
        const description = certifications.find(cert => cert.title === title)?.description || 'Certification details';

        modalTitle.textContent = title;
        modalImage.src = image;
        modalDescription.textContent = description;
        modalUrl.href = url;

        modal.classList.add('active');
      });
    });
  });

  // Modal close functionality
  const modal = document.getElementById('certification-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });

    // Close button functionality
    const closeBtn = modal.querySelector('.certification-modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    }
  }
});
