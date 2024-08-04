const elModal = document.querySelector('#demo-modal');
const elModalOpneButton = document.querySelector('.button-orange');
const elModalClosedButton = document.querySelector('.modal-closed-button');
const elMenuClose = document.querySelector('.menu-close');
const elHeader = document.querySelector('.header');
const elMenuBtn = document.querySelector('.menu-btn');
const elMobileMenu = document.querySelector('.mobile-menu');
const elSitenav = document.querySelector('.sitenav');
const elSeeBtn = document.querySelector('.see-btn');

// MODAL
if(elModalClosedButton) {
    elModalOpneButton.addEventListener('click', function () {
        elModal.classList.add('modal-open')
    });
    
    elModalClosedButton.addEventListener('click', function () {
        elModal.classList.remove('modal-open')
    });
}

setTimeout (function () {
    elModal.classList.add('modal-open');
}, 3000)

// MENU-SWIPE
document.addEventListener("DOMContentLoaded", () => {
    elSeeBtn.addEventListener("click", () => {
        elMobileMenu.classList.toggle("mobile-menu-active");
    });
    
    elMenuBtn.addEventListener("click", () => {
        elSitenav.classList.toggle("sitenav-active");
    });
    
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;
    
    document.addEventListener("touchstart", (event) => {
        touchStartX = event.changedTouches[0].screenX;
        touchStartY = event.changedTouches[0].screenY;
    });
    
    document.addEventListener("touchend", (event) => {
        touchEndX = event.changedTouches[0].screenX;
        touchEndY = event.changedTouches[0].screenY;
        handleSwipe();
    });
    
    function handleSwipe() {
        // Chapga siljish
        if (touchStartX - touchEndX > 50) {
            elSitenav.classList.remove("sitenav-active");
        }
        // Pastga siljish
        if (touchEndY - touchStartY > 50) {
            elMobileMenu.classList.remove("mobile-menu-active");
        }
    }
});

// MOBILE-MENU
elMenuClose.addEventListener('click', function () {
    elSitenav.classList.remove('sitenav-active');
});

// REMOVE MENU-OPEN CLASS WHEN CLICKING OUTSIDE THE HEADER
document.addEventListener('click', function (event) {
    if (!elHeader.contains(event.target)) {
        elSitenav.classList.remove('sitenav-active');
    }
});
