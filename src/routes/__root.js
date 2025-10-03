import { createRouter } from "@/gen/jsrouter.gen";
import { useJSParams } from "@devwareng/vanilla-js";

// This file is auto-generated

export const Router = (DOM) => {
  useJSParams.getState();
  const router = createRouter(DOM);
  router.navigate(window.location.pathname);

  window.addEventListener("popstate", () => {
    router.navigate(window.location.pathname);
  });
};