import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir:'./tests/e2e',
  use:{
    baseURL:'http://localhost:4173/junjie-chu.cv/',
    reducedMotion:'reduce',
    channel:process.env.PLAYWRIGHT_CHANNEL||undefined,
  },
  webServer:{
    command:'npm run preview -- --host localhost --port 4173 --strictPort',
    url:'http://localhost:4173/junjie-chu.cv/',
    reuseExistingServer:!process.env.CI,
    timeout:25000,
  },
});
