import { Application, ApplicationOptions, Container } from 'pixi.js';
import { FILL_COLOR } from './shared/constant/constants';

import { Graphics } from 'pixi.js';

import { Button } from '@pixi/ui';
import { Viewport } from 'pixi-viewport';
import {
  initializeViewport,
  initializeViewportPlugins,
} from './shared/Viewport';
import { resetView } from './shared/Viewport/resetView';
import { WORLD_HEIGHT, WORLD_WIDTH } from './shared/constant/viewport';
import { bottomTollbar } from './components/static/bottomToolbar';

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

  // Create a new instance of the Graphics class.
  const graphics = new Graphics();

  //add reactangle
  graphics.rect(WORLD_WIDTH / 2, WORLD_HEIGHT / 2, 100, 100).fill(0xff0000);

  // Add the graphics to the stage.

  //add button
  const container = new Container();
  const button = new Button(
    new Graphics()
      .rect(WORLD_WIDTH / 2 + 200, WORLD_HEIGHT / 2 + 100, 100, 50)
      .fill(0x22ffff),
  );


  container.addChild(button.view);
  viewport.addChild(graphics);
  viewport.addChild(container);

  app.stage.addChild(bottomTollbar());
})();
