import { Viewport } from 'pixi-viewport';
import { EventSystem, Graphics } from 'pixi.js';
import {
  BORDER,
  WORLD_HEIGHT,
  WORLD_WIDTH,
} from 'src/shared/constant/viewport';

let viewport: Viewport;

export const getViewport = () => viewport;

export const initializeViewport = (events: EventSystem) => {
  viewport = new Viewport({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    worldWidth: WORLD_WIDTH,
    worldHeight: WORLD_HEIGHT,
    events: events, // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
    threshold: 10,
  });

  const line = viewport.addChild(new Graphics());
  line
    .rect(0, 0, WORLD_WIDTH, WORLD_HEIGHT)
    .setStrokeStyle({
      width: BORDER,
      color: 0xffcccc, // red
      alpha: 1,
    })
    .stroke();

  window.addEventListener('resize', () => {
    console.log('resize viewport');
    viewport.resize(
      window.innerWidth,
      window.innerHeight,
      WORLD_WIDTH,
      WORLD_HEIGHT,
    );
  });

  return viewport;
};

export const initializeViewportPlugins = () => {
  viewport.fit().drag().pinch().wheel().decelerate();
};
