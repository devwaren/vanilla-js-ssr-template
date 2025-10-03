import { Img } from '@/components/Image';
import { html, useJSElements, useJSEvent, useJSMetaData } from '@devwareng/vanilla-js';

export default function Index(DOM) {

  useJSMetaData({
    name: 'Home | Vanilla JS SSR',
    description: 'Page Description',
    author: 'Your Name',
    favicon: 'js.webp',
    title: "Home | Vanilla JS SSR",
  });

  let count = 0;

  const tsLogo = Img({
    src: '/js.webp',
    alt: 'JS Logo',
    width: 100,
    height: 100,
    className: 'mx-auto',
  })

  const viteLogo = Img({
    src: '/vite.webp',
    alt: 'Vite Logo',
    width: 100,
    height: 100,
    className: 'mx-auto',
  })

  const ui = useJSElements(
    DOM,
    html`
      <div class="p-4 animate__animated animate__fadeIn duration-300 grid place-items-center min-h-screen">
        <div class="text-center flex flex-col">
          <div class="flex items-center gap-4 justify-center">
            <div>
              ${tsLogo}
            </div>
            <div>
              ${viteLogo}
            </div>
          </div>
          <button id="counter" class="my-9 border rounded px-4 py-2 w-fit mx-auto">Count is 0</button>
          <p>Edit <code>src/pages/index.js</code> and save to test HMR</p>
        </div>
      </div>
    `,

  );

  useJSEvent("counter", "click", (e) => {
    count++;
    const el = e.target
    el.innerText = `Count is ${count}`
  });

  return ui
}