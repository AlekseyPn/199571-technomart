// Script index page
// index page variable
var overlay = document.querySelector(".modal-overlay");
var openModal = document.querySelectorAll(".item-open");
var popup = document.querySelector(".modal-content");
var close = document.querySelectorAll(".item-close");
var mapPopup = document.querySelector(".modal-content__map");
var openMap = document.querySelector(".map");
var userName = document.querySelector("[name='name']");
var btnSlide = document.querySelectorAll(".btn-slide");
var slide = document.querySelectorAll(".slide");
var currentSlide = 0;

for (i = 0; i < openModal.length; i++) {
    openModal[i].addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-content--show");
        overlay.classList.add("modal-overlay--show");
        popup.scrollIntoView(top);
        userName.focus();

    });
}

for (i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content--show");
        overlay.classList.remove("modal-overlay--show");
        mapPopup.classList.remove("modal-map--show");
    });
};

openMap.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.add("modal-map--show");
    overlay.classList.add("modal-overlay--show");
});

overlay.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content--show");
    overlay.classList.remove("modal-overlay--show");
    mapPopup.classList.remove("modal-map--show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content--show")) {
            popup.classList.remove("modal-content--show");
            overlay.classList.remove("modal-overlay--show");
            popup.classList.remove("modal-error");
        };
        if (mapPopup.classList.contains("modal-map--show")) {
            mapPopup.classList.remove("modal-map--show");
            overlay.classList.remove("modal-overlay--show");
        };
    };
});

// Slider index page

function nextSlide() {
    goToSlide(currentSlide + 1);
};


function goToSlide(n) {
    slide[currentSlide].className = "slide  slide-show"
    currentSlide = (n + slide.length) % slide.length;
    slide[currentSlide].className = "slide";
};
for (i = 0; i < btnSlide.length; i++) {
    btnSlide[i].addEventListener("click", function() {
        nextSlide();
    });
};