import { elementReady } from '../utils/elementReady'

export function waitLoad(query) {
    return new Promise(async (resolve, reject) => {
        const block = await elementReady(query)

        block.style.display = 'none'

        await elementReady(`${query} script`)

        resolve(block)
    })
}
