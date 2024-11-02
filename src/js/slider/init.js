import { getData } from './getData'
import { getSlider } from './getSlider'
import { initSwiper } from './initSwiper'
import { scale } from './scale'
import { waitLoad } from './waitLoad'

export async function init() {
    const query = '.uc-slider'

    const block = await waitLoad(query)
    const slider = getSlider(getData(block), query)
    block.after(slider)
    const swiper = initSwiper()
    scale(slider, swiper)
}
