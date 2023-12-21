document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
  
    // Show the initial slide
    showSlide(currentSlide);
  
    // Event listeners for navigation arrows
    document.querySelector('.left-arrow').addEventListener('click', function () {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
    });
  
    document.querySelector('.right-arrow').addEventListener('click', function () {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    });
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
      });
    }
  });
  