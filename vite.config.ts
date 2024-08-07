import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  plugins: [react(), basicSsl()],
  build: {
    outDir: "./docs",
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    cors: {
      origin: "*", // Разрешить доступ из любых источников
    },
    hmr: {
      host: "localhost",
    },
  },
  base: "./",
  define: {
    "process.env.VITE_SUPABASE_URL": JSON.stringify("VITE_SUPABASE_URL"),
    "process.env.VITE_SUPABASE_ANON_KEY": JSON.stringify(
      "VITE_SUPABASE_ANON_KEY"
    ),
    "process.env.VITE_TELEGRAM_BOT_TOKEN": JSON.stringify(
      "VITE_TELEGRAM_BOT_TOKEN"
    ),
    "process.env.VITE_WEB_APP_LINK": JSON.stringify("VITE_WEB_APP_LINK"),
  },
});
