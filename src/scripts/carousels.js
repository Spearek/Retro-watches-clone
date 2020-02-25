const watchSliders = document.querySelectorAll('.watches__slider');

for(const watchSlider of watchSliders) {
    new Siema({
        selector:watchSlider,
        loop: true, 
    })};