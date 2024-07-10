// Get the current year for the copyright 

$('#year').text(new Date().getFullYear());

// Lightbox

document.addEventListener("DOMContentLoaded", function() {
  var sections = document.querySelectorAll("section.border-bottom-last-0-wrapper");
  if (sections.length > 0) {
      sections[sections.length - 1].classList.add("border-bottom-last-0");
  }
});

// Simple onclick event

// $("#.classOrId").click(function(){
//     $(".classOrId").removeClass("class");
//     $(".classOrId").addClass("class");
// });


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