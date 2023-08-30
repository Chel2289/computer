let sliders = document.querySelectorAll('.slider');

for (let p = 0; p < sliders.length; p++) {
    init_slider(sliders[p]);
}

function init_slider(slider) {
    let elements = slider.querySelectorAll('.slide');
    let go = slider.querySelector('.right');
    let back = slider.querySelector('.left');

    let currentSlide;
    let oldSlide;
    let i = 0;

    function changeIndexGo() {
        oldSlide = elements[i];
        i = i + 1;
        if (i > 2) i = 0;
        currentSlide = elements[i];

    }

    function changeIndexBack() {
        oldSlide = elements[i];
        i = i - 1;
        if (i < 0) i = 2;
        currentSlide = elements[i];
    }

    go.addEventListener('click', function () {
        changeIndexGo();
        oldSlide.classList.add('hide');
        currentSlide.classList.remove('hide');
    });

    back.addEventListener('click', function () {
        changeIndexBack();
        oldSlide.classList.add('hide');
        currentSlide.classList.remove('hide');
    });
}

