import App from './App'

export function render(_url) {
  const html = App()
  return { html }
}