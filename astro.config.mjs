import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    integrations: [
      ],
    redirects: {
      "/decimaltime": "/projects/decimal-time",
      "/minisweeper": "/projects/minisweeper",
      "/pentapop": "/projects/pentapop",
      "/thestorygoeson": "/projects/the-story-goes-on",
      "/vrc_tower_defense": "/projects/super-tower-defense"
    }
});
