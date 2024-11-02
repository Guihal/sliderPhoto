export function getSlider(data, query) {
    return Object.assign(document.createElement('div'), {
        className: `swiper_container`,
        innerHTML: `
        <div class="swiper_inner">
        <div class="swiper-nav swiper-nav_prev"></div>
        <div class="swiper ${query.replace('.', '')}">
            <div class="swiper-wrapper">
                ${data
                    .map(
                        (slide) => `
                <div class="swiper-slide">
                    <img
                        loading="lazy"
                        width="296"
                        height="349"
                        class="swiper_img"
                        src="${slide}"
                        alt="Положительный отзыв"
                    />
                </div>
                `
                    )
                    .join(' ')}
            </div>
        </div>
        <div class="swiper-nav swiper-nav_next"></div>
    </div>
`,
    })
}
