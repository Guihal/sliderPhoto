export function initSwiper() {
    return new Swiper('.swiper', {
        spaceBetween: 20,

        navigation: {
            nextEl: '.swiper-nav_next',
            prevEl: '.swiper-nav_prev',
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1000: {
                slidesPerView: 3,
            },
        },
    })
}
