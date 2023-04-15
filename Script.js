
var sliderImages = document.querySelectorAll('#slider-main .slider-image');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 4000);

function nextSlide() {
  sliderImages[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % sliderImages.length;
  sliderImages[currentSlide].classList.add('active');
}
