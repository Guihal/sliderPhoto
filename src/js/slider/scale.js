import { throttle } from '../utils/throttle'
import { setVars } from './setVars'

export function scale(block, swiper) {
    const images = block.querySelectorAll('img')

    const callback = () => {
        const scaled = document.querySelector('[style*="zoom"]')

        if (!scaled) return

        const zoom = Number(scaled.style.zoom)

        setVars(block, zoom)

        swiper.params.spaceBetween = 20 * zoom
        swiper.update()

        images.forEach((img) => {
            img.width = 296 * zoom
            img.height = 349 * zoom
        })
    }

    callback()

    document.addEventListener('DOMContentLoaded', callback)
    window.addEventListener('resize', throttle(callback, 30))
}
