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
    const liveRegion = container.querySelector('#carousel-live-region');
    let currentIndex = 0;
    let interval;

    // Cache slide width to avoid layout reads on every update
    let cachedSlideWidth = 300;

    function readSlideWidth() {
      if (slides[0]) {
        cachedSlideWidth = slides[0].offsetWidth || cachedSlideWidth;
      }
    }

    // Read width once on init (single layout read)
    readSlideWidth();

    // Update cached width on resize via ResizeObserver (safe — runs post-layout)
    const resizeObserver = new ResizeObserver(() => {
      readSlideWidth();
      updateCarousel();
    });
    if (slides[0]) resizeObserver.observe(slides[0]);

    // Create dots for progress indicator using <button> for proper semantics
    slides.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.classList.add('certification-dot');
      dot.setAttribute('aria-label', `Go to certification ${index + 1}`);
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.certification-dot');

    function updateCarousel() {
      const slideWidth = cachedSlideWidth;
      const innerContainer = slides[0]?.parentElement;

      if (innerContainer) {
        innerContainer.style.width = `${slideWidth * slides.length}px`;
        innerContainer.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
      }

      slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentIndex);
        slide.style.opacity = index === currentIndex ? '1' : '0.7';
        slide.style.flexShrink = '0';
        slide.style.width = `${slideWidth}px`;
      });

      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
        dot.setAttribute('aria-label', `Go to certification ${index + 1}${index === currentIndex ? ' (current)' : ''}`);
      });

      // Announce current slide to screen readers
      if (liveRegion && slides[currentIndex]) {
        const title = slides[currentIndex].querySelector('h3')?.textContent ?? '';
        liveRegion.textContent = `Showing certification ${currentIndex + 1} of ${slides.length}: ${title}`;
      }
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

    // Keyboard arrow navigation on the carousel container
    container.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { nextSlide(); resetInterval(); }
      if (e.key === 'ArrowLeft') { prevSlide(); resetInterval(); }
    });

    // Pause on hover
    container.addEventListener('mouseenter', () => clearInterval(interval));
    container.addEventListener('mouseleave', resetInterval);

    // Add click handlers for modal — card is now a <button>
    slides.forEach(slide => {
      const btn = slide.querySelector('button');
      if (!btn) return;
      btn.addEventListener('click', () => {
        const modal = document.getElementById('certification-modal');
        const modalTitle = modal.querySelector('.certification-modal-title');
        const modalImage = modal.querySelector('.certification-modal-image');
        const modalDescription = modal.querySelector('.certification-modal-description');
        const modalUrl = modal.querySelector('.certification-modal-url');

        const title = slide.querySelector('p')?.textContent?.trim() ?? '';
        const image = slide.querySelector('img')?.src ?? '';
        const certData = certifications.find(cert => cert.title === title);

        modalTitle.textContent = title;
        modalImage.src = image;
        modalImage.alt = title;
        modalDescription.textContent = certData?.description ?? '';
        modalUrl.href = certData?.url ?? '#';

        openModal(modal, btn);
      });
    });
  });

  // ── Modal helpers ──────────────────────────────────────────────────────────

  function getFocusableElements(container) {
    return Array.from(container.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    ));
  }

  function openModal(modal, triggerEl) {
    modal.classList.add('active');
    modal._trigger = triggerEl;

    // Move focus to first focusable element inside modal
    const focusable = getFocusableElements(modal);
    if (focusable.length) focusable[0].focus();

    // Trap focus inside modal
    modal._trapHandler = (e) => {
      if (e.key !== 'Tab') return;
      const focusable = getFocusableElements(modal);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    modal.addEventListener('keydown', modal._trapHandler);
  }

  function closeModal(modal) {
    modal.classList.remove('active');
    modal.removeEventListener('keydown', modal._trapHandler);
    // Restore focus to the element that triggered the modal
    if (modal._trigger) modal._trigger.focus();
    modal._trigger = null;
  }

  // Modal close functionality
  const modal = document.getElementById('certification-modal');
  if (modal) {
    // Close on backdrop click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal);
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal(modal);
      }
    });

    // Close button
    const closeBtn = modal.querySelector('.certification-modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => closeModal(modal));
    }
  }
});
