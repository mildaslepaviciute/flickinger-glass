// Get the current year for the copyright 

$('#year').text(new Date().getFullYear());

// Lightbox

document.addEventListener("DOMContentLoaded", function() {
  var sections = document.querySelectorAll("section.border-bottom-last-0-wrapper");
  if (sections.length > 0) {
      sections[sections.length - 1].classList.add("border-bottom-last-0");
  }
});


$(document).ready(function() {
  var scrollPosition = 0;

  var modal = document.getElementById('contactModal');

  modal.addEventListener('show.bs.modal', function () {
      // Save the current scroll position
      scrollPosition = window.scrollY;

      // Prevent body from shifting
      document.body.style.position = 'fixed';
      document.body.style.top = -scrollPosition + 'px';
      document.body.style.width = '100%';
  });

  modal.addEventListener('hidden.bs.modal', function () {
      // Remove fixed position styles
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';

      // Restore the scroll position
      window.scrollTo(0, scrollPosition);
  });
});


// AOS animations

AOS.init({
  // Global settings:
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,

  // Can be overridden by `data-aos-*` attributes:
  offset: 120,
  delay: 0,
  duration: 500,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
});