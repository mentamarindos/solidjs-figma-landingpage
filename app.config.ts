import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": `${(import.meta as any).dirname}/src`,
        "~": `${(import.meta as any).dirname}/src`
      }
    }
  }
});
