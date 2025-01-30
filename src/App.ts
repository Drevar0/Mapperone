import { Application, ApplicationOptions, Graphics } from 'pixi.js';

import { Viewport } from 'pixi-viewport';
import {
  initializeViewport,
  initializeViewportPlugins,
  setViewportBorderStyle,
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
  await initializeApp(app, 'build');
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

      if (border === undefined) {
        return;
      }

      if (scene === 'build') {
        setViewportBorderStyle(border, 0xffcccc);
        localStorage.setItem('scene', 'build');
      } else if (scene === 'match') {
        setViewportBorderStyle(border, 0xccffcc);
        localStorage.setItem('scene', 'match');
      }
    },
    app,
  });

  app.stage.addChild(bottomTollbar());
};
