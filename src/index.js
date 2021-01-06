import "./index.scss";
import Swiper from "swiper/bundle";


const popupNews = document.querySelector('.popup_n');
const popupDiscover = document.querySelector('.popup_d');
const popupUnepicked = document.querySelector('.popup_u');
const headerMenu = document.querySelector('.header__menu');

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('header__link_n')) {
        popupNews.classList.toggle('active');
        popupDiscover.classList.remove('active');
        popupUnepicked.classList.remove('active');
    } else if (e.target.classList.contains('header__link_d')) {
        popupDiscover.classList.toggle('active');
        popupNews.classList.remove('active');
        popupUnepicked.classList.remove('active');
    } else if (e.target.classList.contains('header__link_u')) {
        popupUnepicked.classList.toggle('active');
        popupNews.classList.remove('active');
        popupDiscover.classList.remove('active');
    } else if (e.target.classList.contains('header__avatar')) {
        popupUnepicked.classList.toggle('active');
        headerMenu.classList.remove('active');
    } else if (e.target.classList.contains('header__burger_open')) {
        headerMenu.classList.add('active');
        popupUnepicked.classList.remove('active');
    } else if (e.target.classList.contains('header__burger_close')) {
        popupNews.classList.remove('active');
        popupDiscover.classList.remove('active');
        headerMenu.classList.remove('active');
    } else if (e.target.className !== 'header__link_u' || e.target.className !== 'header__link_n' || e.target.className !== 'header__link_d') {
        popupNews.classList.remove('active');
        popupDiscover.classList.remove('active');
        popupUnepicked.classList.remove('active');
        headerMenu.classList.remove('active');
    }
});

// настройки слайдера героев

(function () {

    const breakpoint = window.matchMedia('(min-width:1060px)');

    let mySwiper;

    const breakpointChecker = function () {

        if (breakpoint.matches === true) {

            if (mySwiper !== undefined) mySwiper.destroy(true, true);
            return;

        } else if (breakpoint.matches === false) {

            return enableSwiper();

        }

    };

    const enableSwiper = function () {

        mySwiper = new Swiper('.swiper-container', {
            loop: false,
            slidesPerView: 'auto',
            keyboardControl: true,
            grabCursor: true,
        });

    };

    breakpoint.addListener(breakpointChecker);

    breakpointChecker();

})();


export const mySwiper = new Swiper(".swiper-container-skill", {
    init: false,
    loop: true,
    loopedSlides: 1,
    slidesPerView: 3,
    spaceBetween: 30,
    simulateTouch: false,
    slidesPerGroup: 3,
    initialSlide: 0,

    // breakpoints: {
    //     1090: {
    //         slidesPerView: 2,
    //     },
    // },

    navigation: {
        prevEl: ".swiper-button-prev",
      },
});

mySwiper.init()