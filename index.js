const sliderBlock = document.querySelector('.slider_block');
const sliderIndicators = document.querySelectorAll('.slider_indicator')
const sliderImages = document.querySelectorAll('.slider-image');
const sliderImagesBlock = document.querySelector('.slider_images_block');

const sliderButtonsPrevious = document.querySelector(".slider_button_previous")
const sliderButtonNext = document.querySelector(".slider_button_next")

let sliderCount = 0;
let sliderWidth = sliderBlock.offsetWidth;

sliderButtonNext.addEventListener('click', nextImage);

sliderButtonsPrevious.addEventListener('click', previousImage);

window.addEventListener('resize', showSlide);

function showSlide(){
    sliderWidth = document.querySelector('.slider_block').offsetWidth;
    sliderImagesBlock.style.Width = sliderWidth*sliderImages.length+'px';
    sliderImages.forEach(item => item.style.width = sliderWidth+'px');
    rollSlider();
}

showSlide();

function nextImage(argument) {
    sliderCount++;
    if(sliderCount >= sliderImages.length)
        sliderCount = 0;
    rollSlider();
    thisSlide(sliderCount);
}
function previousImage(argument) {
    sliderCount--;
    if(sliderCount < 0)
        sliderCount = sliderImages.length-1;
    rollSlider();
    thisSlide(sliderCount);
}
function rollSlider(){
    sliderImagesBlock.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}
function thisSlide(index){
    sliderIndicators.forEach(item => item.classList.remove('active_slider_indicator'));
    sliderIndicators[index].classList.add('active_slider_indicator');
}