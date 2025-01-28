import { Application, ApplicationOptions, Container } from 'pixi.js';
import { FILL_COLOR } from 'src/shared/constant/constants';

import { Viewport } from 'pixi-viewport';
import {
  initializeViewport,
  initializeViewportPlugins,
} from 'src/shared/Viewport';
import { resetView } from 'src/shared/Viewport/resetView';
import { bottomTollbar } from 'src/components/static/bottomToolbar';

// Asynchronous IIFE
(async () => {
  const canvas = document.getElementById('pixi-screen') as HTMLCanvasElement;
  const resizeTo = window;
  const resolution = window.devicePixelRatio || 1;
  const autoDensity = true;
  const backgroundColor = FILL_COLOR;
  const appOptions: Partial<ApplicationOptions> = {
    canvas,
    resizeTo,
    resolution,
    autoDensity,
    backgroundColor,
  };

  // Create a PixiJS application.
  const app = new Application();

  // Intialize the application.
  await app.init(appOptions);

  const viewport: Viewport = initializeViewport(app.renderer.events);
  app.stage.addChild(viewport);
  initializeViewportPlugins();
  resetView(viewport);

  app.stage.addChild(bottomTollbar());
})();
