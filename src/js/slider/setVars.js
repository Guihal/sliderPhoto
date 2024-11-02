export function setVars(block, zoom) {
    const data = getData()

    block.style.setProperty('--mxw', `${zoom * 1200}px`)
    block.style.setProperty('--pad-gor', `${zoom * data.padGor}px`)
    block.style.setProperty('--pad-vert', `${zoom * data.padVert}px`)
    block.style.setProperty('--gap', `${zoom * 55}px`)
    block.style.setProperty('--nav-size', `${zoom * 58}px`)
    block.style.setProperty('--arrow-size', `${zoom * 12}px`)
}

function getData() {
    const data = {
        padGor: 60,
        padVert: 100,
    }

    if (window.innerWidth >= 1200) {
        data.padGor = 60
        data.padVert = 100
    } else if (window.innerWidth >= 640) {
        data.padGor = 40
        data.padVert = 100
    } else {
        data.padGor = 20
        data.padVert = 70
    }

    return data
}
