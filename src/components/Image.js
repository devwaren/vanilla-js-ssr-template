import { html } from "@devwareng/vanilla-js"



const Img = ({ src, alt, className, width, height }) => {
    return (
        html`
            <img src=${src} alt=${alt} class=${className} width=${width} height=${height}>
        `
    )
}

export { Img }