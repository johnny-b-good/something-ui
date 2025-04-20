import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import { visualizer } from "rollup-plugin-visualizer";
import preserveDirectives from "rollup-preserve-directives";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      name: "something-ui",
      formats: ["es"],
      fileName(_format, entryName) {
        return `${entryName}.js`;
      },
      cssFileName: "index",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@headlessui/react",
        "@heroicons/react",
        "@heroicons/react/24/outline",
        "@heroicons/react/24/solid",
        "clsx",
        "@radix-ui/react-slot",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        preserveModules: true,
        exports: "named",
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    react(),
    tailwindcss(),
    preserveDirectives(),
    dts({ rollupTypes: true, tsconfigPath: "./tsconfig.app.json" }),
    visualizer(),
  ],
});
