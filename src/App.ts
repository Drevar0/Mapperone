import { Application, ApplicationOptions, Container } from 'pixi.js';

import { Viewport } from 'pixi-viewport';
import {
  initializeMatchViewport,
  initializeMatchViewportPlugins,
} from 'src/shared/matchScene';
import {
  initializeBuildViewport,
  initializeBuildViewportPlugins,
} from 'src/shared/buildScene';
import { resetView } from 'src/shared/matchScene/resetView';
import { bottomTollbar } from 'src/components/static/bottomToolbar';
import { theme } from './constant/theme';
import staticInterface from './shared/staticInterface';
import { app } from 'electron';

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
  initializeApp(app, 'match');
})();

const initializeApp = (app: Application, type: 'match' | 'build') => {
  const viewport: Viewport =
    type === 'match'
      ? initializeMatchViewport(app.renderer.events)
      : initializeBuildViewport(app.renderer.events);

  app.stage.addChild(viewport);
  type === 'match'
    ? initializeMatchViewportPlugins()
    : initializeBuildViewportPlugins();
  resetView(viewport);

  staticInterface({
    onSceneChange: scene => {
      if (scene === 'build') {
        app.stage.removeChildren();
        initializeApp(app, 'build');
      } else if (scene === 'match') {
        app.stage.removeChildren();
        initializeApp(app, 'match');
      }
    },
    app,
  });

  app.stage.addChild(bottomTollbar());
};
