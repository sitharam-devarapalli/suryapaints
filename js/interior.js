// interior home service js 
const boxes = document.querySelectorAll('.interiorhomeservices-box');
const section = document.getElementById('interiorServiceSection');

let lastActiveBox = document.querySelector('.interiorhomeservices-box .interiorhomeservices-inner.active');

// Set initial background
if (lastActiveBox) {
  const parent = lastActiveBox.closest('.interiorhomeservices-box');
  const bg = parent.getAttribute('data-bg');
  section.style.backgroundImage = `url('${bg}')`;
}

boxes.forEach(box => {
  const inner = box.querySelector('.interiorhomeservices-inner');

  box.addEventListener('mouseenter', () => {
    // Remove all show-content classes
    document.querySelectorAll('.interiorhomeservices-inner').forEach(el => {
      el.classList.remove('show-content');
    });

    // Add show-content only to hovered one
    inner.classList.add('show-content');

    // Update background image and mark this as last active
    const bg = box.getAttribute('data-bg');
    section.style.backgroundImage = `url('${bg}')`;

    // Save last active (for title and bg only)
    document.querySelectorAll('.interiorhomeservices-inner').forEach(el => el.classList.remove('active'));
    inner.classList.add('active');
    lastActiveBox = inner;
  });
});

// When mouse leaves entire section, hide content
section.addEventListener('mouseleave', () => {
  document.querySelectorAll('.interiorhomeservices-inner').forEach(el => el.classList.remove('show-content'));

  if (lastActiveBox) {
    lastActiveBox.classList.add('active');
    const parent = lastActiveBox.closest('.interiorhomeservices-box');
    const bg = parent.getAttribute('data-bg');
    section.style.backgroundImage = `url('${bg}')`;
  }
});



// interior home slider js 
const carousel = document.getElementById('interiorhomesliderCarousel');
const dots = document.querySelectorAll('.interiorhomeslider-dots button');

carousel.addEventListener('slid.bs.carousel', function (e) {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[e.to].classList.add('active');
});


// <!-- old and new design compare setion js -->
const tabs = document.querySelectorAll('.interiorhomedesign-tab');
const contents = document.querySelectorAll('.interiorhomedesign-content');

// Tab Switcher
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => {
      c.classList.add('d-none');
      c.classList.remove('active');
    });

    tab.classList.add('active');
    const target = document.querySelector(tab.dataset.target);
    target.classList.remove('d-none');
    target.classList.add('active');
  });
});

// Drag Functionality for EACH tab content (Mouse + Touch support)
contents.forEach(content => {
  const dragBtn = content.querySelector('.interiorhomedesign-drag-button');
  const afterImg = content.querySelector('.interiorhomedesign-after');
  const compareWrapper = content.querySelector('.interiorhomedesign-compare-wrapper');

  if (dragBtn && afterImg && compareWrapper) {
    let isDragging = false;

    // Common function to update drag position
    function updateDragPosition(clientX) {
      const rect = compareWrapper.getBoundingClientRect();
      let x = clientX - rect.left;
      x = Math.max(0, Math.min(x, rect.width));
      const percent = (x / rect.width) * 100;
      afterImg.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
      dragBtn.style.left = `${percent}%`;
    }

    // Mouse Events
    dragBtn.addEventListener('mousedown', () => {
      isDragging = true;
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', stopDragging);
    });

    function handleMouseMove(e) {
      if (isDragging) updateDragPosition(e.clientX);
    }

    function stopDragging() {
      isDragging = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', stopDragging);
    }

    // Touch Events
    dragBtn.addEventListener('touchstart', () => {
      isDragging = true;
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', stopTouchDragging);
    });

    function handleTouchMove(e) {
      if (isDragging && e.touches.length > 0) {
        e.preventDefault(); // prevent page scroll
        updateDragPosition(e.touches[0].clientX);
      }
    }

    function stopTouchDragging() {
      isDragging = false;
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', stopTouchDragging);
    }
  }
});



// what we do numbers count js 
const counters = document.querySelectorAll('.counter');

const animateCounter = (counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const speed = 200; // Lower is faster
    const increment = Math.ceil(target / speed);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
};

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

counters.forEach(counter => {
  observer.observe(counter);
});