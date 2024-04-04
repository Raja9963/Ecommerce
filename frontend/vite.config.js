import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/":{
        target: "https://ecommerce-bj60.onrender.com",
        changeOrigin:true,
        secure:false,
        },
      "/uploads/": {
        target :"https://ecommerce-bj60.onrender.com",
      changeOrigin:true,
    secure:false,
  }
    },
  },
});
