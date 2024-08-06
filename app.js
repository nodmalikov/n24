const elModalOpneButton = document.querySelector('.button-orange');
const elHeader = document.querySelector('.header');
const elMenuBtn = document.querySelector('.menu-btn');
const elMobileMenu = document.querySelector('.mobile-menu');
const elSitenav = document.querySelector('.sitenav');
const elSeeBtn = document.querySelector('.see-btn');
const elHeaderAside = document.querySelector('.header-aside');
const elHeaderTop = document.querySelector('.header-top');
const elModal = document.getElementById('demo-modal');
const closeModalButton = document.querySelector('.modal-closed-button');
const elModalBtn = document.querySelector('.modal-content-link');

// MENU-SWIPE
document.addEventListener('DOMContentLoaded', () => {
    elSeeBtn.addEventListener('click', () => {
        elMobileMenu.classList.toggle('mobile-menu-active');
        elSeeBtn.classList.toggle('rotate');
    });
    
    elMenuBtn.addEventListener('click', () => {
        elSitenav.classList.toggle('sitenav-active');
        elMenuBtn.classList.toggle('rotate');
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
        // CHAPGA SILJISH
        if (touchStartX - touchEndX > 50) {
            elSitenav.classList.remove('sitenav-active');
            elMenuBtn.classList.remove('rotate');
        }
        // PASTGA SILJISH
        if (touchEndY - touchStartY > 50) {
            elMobileMenu.classList.remove('mobile-menu-active');
            elSeeBtn.classList.remove('rotate');
        }
    }
});

// SCROLL
window.onscroll = function() {
    if (window.innerWidth > 1001) {
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

// CHECK LOCALSTORAGE FOR USER'S PREFERENCE
document.addEventListener('DOMContentLoaded', () => {
    if (elModal) {
        // CHECK LOCALSTORAGE FOR USER'S PREFERENCE
        if (localStorage.getItem('modalClosed') !== 'true') {
            setTimeout(() => {
                elModal.classList.add('modal-open');
            }, 3000); // SHOW MODAL AFTER 3 SECONDS
        }
        
        // CLOSE MODAL AND SAVE USER'S CHOICE TO LOCALSTORAGE
        closeModalButton.addEventListener('click', () => {
            elModal.classList.remove('modal-open');
            localStorage.setItem('modalClosed', 'true');
        });
        
        // HANDLE ENABLING NOTIFICATIONS AND SAVE TO LOCALSTORAGE
        elModalBtn.addEventListener('click', (e) => {
            e.preventDefault();
            elModal.classList.remove('modal-open');
            localStorage.setItem('modalClosed', 'true');
            // ADDITIONAL LOGIC TO ENABLE NOTIFICATIONS CAN BE ADDED HERE
        });
    }
});