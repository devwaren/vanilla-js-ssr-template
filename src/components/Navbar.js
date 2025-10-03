import { html, useJSElements } from '@devwareng/vanilla-js'

/**
 * Navbar component
 * @param {HTMLElement} DOM - The root DOM node where the Navbar will render
 */

export default function Navbar(DOM) {
    const ui = useJSElements(
        DOM,
        html`
    <div>
        <h1>Navbar</h1>
        <a href="/">Home</a>
        <a href="/about">About</a>
    </div>
    `
    )
    return ui
}
