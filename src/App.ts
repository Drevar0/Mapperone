import { Application, ApplicationOptions, Graphics } from 'pixi.js';

import { Viewport } from 'pixi-viewport';
import {
  initializeViewport,
  initializeViewportPlugins,
  setBorderStyle,
} from 'src/shared/viewport';
import { resetView } from 'src/shared/viewport/resetView';
import { bottomTollbar } from 'src/components/static/bottomToolbar';
import { theme } from './constant/theme';
import staticInterface from './shared/staticInterface';

// Asynchronous IIFE
(async () => {
  const canvas = document.getElementById('pixi-screen') as HTMLCanvasElement;
  const resizeTo = window;
  const resolution = window.devicePixelRatio || 1;
  const autoDensity = true;
  const backgroundColor = theme.backgroundColor;
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
  await initializeApp(app, 'match');
})();

const initializeApp = async (app: Application, type: 'match' | 'build') => {
  const viewport: Viewport = initializeViewport({
    events: app.renderer.events,
    type,
  });

  app.stage.addChild(viewport);
  initializeViewportPlugins();
  resetView(viewport);

  staticInterface({
    onSceneChange: scene => {
      const border = viewport.children.find(
        child => child.label === 'viewportBorder',
      ) as Graphics | undefined;

      console.log(border);
      if (border === undefined) {
        return;
      }

      if (scene === 'build') {
        setBorderStyle(border, 0xffcccc);
      } else if (scene === 'match') {
        setBorderStyle(border, 0xccffcc);
      }
    },
    app,
  });

  app.stage.addChild(bottomTollbar());
};
