import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // Use jsdom for browser-like environment
    globals: true, // Enable global variables like `expect` and `describe`
    setupFiles: "./src/setupTests.js", // Optional: for global test setup
  },
});
