import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    VitePWA({
      manifest: {
        name: "My App",
        short_name: "App",
        description: "My awesome App",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/path-to-icon.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\.example\.com\/.*/,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
              expiration: {
                maxEntries: 200,
                maxAgeSeconds: 24 * 60 * 60,
              },
            },
          },
        ],
      },
    }),
  ],
});
