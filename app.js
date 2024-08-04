const elModal = document.querySelector('#demo-modal');
const elModalOpneButton = document.querySelector('.button-orange');
const elModalClosedButton = document.querySelector('.modal-closed-button');
const elMenuClose = document.querySelector('.menu-close');
const elHeader = document.querySelector('.header');
const elMenuBtn = document.querySelector('.menu-btn');
const elMobileMenu = document.querySelector('.mobile-menu');
const elSitenav = document.querySelector('.sitenav');
const elSeeBtn = document.querySelector('.see-btn');
const elHeaderAside = document.querySelector('.header-aside');
const elHeaderTop = document.querySelector('.header-top');
const modal = document.getElementById('demo-modal');
const closeModalButton = document.querySelector('.modal-closed-button');
const enableNotificationsLink = document.querySelector('.modal-content-link');

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
document.addEventListener('DOMContentLoaded', () => {
    elSeeBtn.addEventListener('click', () => {
        elMobileMenu.classList.toggle('mobile-menu-active');
    });
    
    elMenuBtn.addEventListener('click', () => {
        elSitenav.classList.toggle('sitenav-active');
    });
    
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;
    
    document.addEventListener('touchstart', (event) => {
        touchStartX = event.changedTouches[0].screenX;
        touchStartY = event.changedTouches[0].screenY;
    });
    
    document.addEventListener('touchend', (event) => {
        touchEndX = event.changedTouches[0].screenX;
        touchEndY = event.changedTouches[0].screenY;
        handleSwipe();
    });
    
    function handleSwipe() {
        // Chapga siljish
        if (touchStartX - touchEndX > 50) {
            elSitenav.classList.remove('sitenav-active');
        }
        // Pastga siljish
        if (touchEndY - touchStartY > 50) {
            elMobileMenu.classList.remove('mobile-menu-active');
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

// SCROLL
window.onscroll = function() {
    if (window.innerWidth > 1000) {
        const offset = elSitenav.offsetHeight;
        if (window.scrollY > offset - 20) {
            elSitenav.classList.add('sitenav-background');
        } else if (window.scrollY < offset - 20) {
            elSitenav.classList.remove('sitenav-background');
        }
    }
}

// MARGIN-TOP
window.addEventListener('DOMContentLoaded', () => {
    function AsideMargin() {
        if (window.innerWidth < 1001) {
            const headerHeight = elHeaderTop.offsetHeight;
            elHeaderAside.style.marginTop = `${headerHeight + 10}px`;
        } else {
            elHeaderAside.style.marginTop = '10px'; // RESET MARGIN IF CONDITION IS NOT MET
        }
    }
    
    // ASIDE MARGIN FUNCTION
    AsideMargin();
    
    // ASIDE MARGIN UPDATE
    window.addEventListener('resize', AsideMargin);
});