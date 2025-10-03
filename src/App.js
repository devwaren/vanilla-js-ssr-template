import { html, useJSComponent, useJSElements, useJSNoReload, useJSSSRHydration } from '@devwareng/vanilla-js'
import { Router } from './routes/__root';
import "./index.css"

/**
 * Navbar component
 * @param {HTMLElement} DOM - The root DOM node where the Navbar will render
 */

export default function App(DOM) {
  const { isDOM } = useJSSSRHydration(DOM)
  if (!isDOM) return ''

  const ui = useJSElements(
    isDOM,
    html`
      <div class="min-h-screen text-white bg-black">
        <div id="routes"></div>
      </div>
    `
  )

  useJSNoReload(isDOM)
  useJSComponent("routes", isDOM, Router)

  return ui
}