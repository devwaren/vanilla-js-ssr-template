// AUTO-GENERATED FILE. DO NOT EDIT MANUALLY.
import { html, useJSElements } from "@devwareng/vanilla-js"

import Index from "../pages/index";

export function NotFound(DOM) {
  return useJSElements(DOM, html`<div class="animate__animated animate__fadeIn duration-300 p-4"><h1>404 - Page Not Found</h1></div>`)
}

export function RootDocument(DOM) {
  return useJSElements(DOM, html`<div><h1>Root</h1></div>`)
}

export const routeTree = [
  { path: "/", name: "index", component: (DOM) => Index(DOM) }
]

export function createRouter(DOM) {
  function matchRoute(path) {
    for (const route of routeTree) {
      const keys = []
      const regex = new RegExp("^" + route.path.replace(/:([^/]+)/g, (_, key) => {
        keys.push(key)
        return "([^/]+)"
      }) + "$")
      const pathname = path.split("?")[0]
      const match = pathname?.match(regex)
      if (match) {
        const params = {}
        keys.forEach((key, i) => (params[key] = match[i + 1] || ""))
        return { ...route, params }
      }
    }
    return null
  }

  function navigate(path) {
    const match = matchRoute(path)
    if (match) { match.component(DOM); history.pushState({}, "", path) }
    else { NotFound(DOM) }
  }

  window.addEventListener("popstate", () => {
    const path = window.location.pathname + window.location.search
    const match = matchRoute(path)
    if (match) { match.component(DOM) }
    else { NotFound(DOM) }
  })

  navigate(window.location.pathname + window.location.search)
  return { navigate, routes: routeTree }
}
