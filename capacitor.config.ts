import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'devAuthApp',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 5000,
      launchAutoHide: true,
      androidScaleType: "CENTER_CROP",
      splashImmersive: true,
      backgroundColor: "#ffffff"
    }
  }
};

export default config;
