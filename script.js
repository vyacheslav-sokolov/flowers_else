var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 4,
    speed: 425,
    paginationClickable: true,
    spaceBetween: 0,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    mousewheelControl: false,
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 16
        },
        // когда ширина экрана меньше 768px
        768: {
            slidesPerView: 3,
            spaceBetween: 16
        },
        // когда ширина экрана меньше 992px
        992: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        // когда ширина экрана меньше 1200px
        10000: {
            slidesPerView: 4,
            spaceBetween: 30
        }
        // и так далее
    }
});

document.getElementById("navbar-toggle").addEventListener("click", function () {
    this.classList.toggle("is-active");
});
document.getElementById("navbar-toggle").addEventListener("click", function () {
    document.getElementById("mobile_menu").classList.toggle("block_mobile_menu");
});
let submenuOne = document.querySelector('.menu_item_1');
let submenuTwo = document.querySelector('.menu_item_2');
let submenuThree = document.querySelector('.menu_item_6');

let submenuFour = document.querySelector('.top_about_us');
let submenuFive = document.querySelector('.category');
let submenuSix = document.querySelector('.bouquet_selection');
document.querySelector('.toggle-sign-footer-item_1').addEventListener("click", function () {
    this.classList.toggle("minus");
    submenuFour.classList.toggle('block_footer');
});
document.querySelector('.toggle-sign-footer-item_2').addEventListener("click", function () {
    this.classList.toggle("minus");
    submenuFive.classList.toggle('block_footer');
});
document.querySelector('.toggle-sign-footer-item_3').addEventListener("click", function () {
    this.classList.toggle("minus");
    submenuSix.classList.toggle('block_footer');
});
