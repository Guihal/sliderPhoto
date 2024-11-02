export function getData(block) {
    const data = []

    block.querySelectorAll('.t214__blockimg').forEach((img) => {
        data.push(img.dataset.original)
    })

    return data
}
