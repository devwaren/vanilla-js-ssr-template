import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { JSFilebasedRouter } from "@devwareng/vanilla-js";

export default defineConfig(({ command }) => {
    const isBuild = command === "build";
    const isNode = typeof process !== "undefined" && process.versions?.node;

    return {
        plugins: [
            tailwindcss(),
            ...(isNode ? [JSFilebasedRouter()] : []), // ✅ only add router in Node
        ],
        resolve: {
            alias: { "@": path.resolve(__dirname, "src") },
        },
        build: {
            manifest: true, // ✅ always generate manifest.json
            outDir: isBuild ? "dist/client" : ".vite", // ✅ prod → dist/client, dev → .vite
            emptyOutDir: true,
            rollupOptions: {
                input: path.resolve(__dirname, "src/entry-client.js"),
                external: [
                    "fs",
                    "fs/promises",
                    "os",
                    "stream",
                    "events",
                    "node:path",
                    "node:fs/promises",
                    "node:stream",
                    "path",
                ],
            },
        },
        ssr: {
            noExternal: ["@devwareng/vanilla-js"], // ✅ keep bundled for server
        },

    };
});
