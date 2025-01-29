import { Viewport } from 'pixi-viewport';
import { EventSystem, Graphics } from 'pixi.js';
import { BORDER, WORLD_HEIGHT, WORLD_WIDTH } from 'src/constant/viewport';

let viewport: Viewport;

export const getViewport = () => viewport;

export const initializeBuildViewport = (events: EventSystem) => {
  viewport = new Viewport({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    worldWidth: WORLD_WIDTH,
    worldHeight: WORLD_HEIGHT,
    events: events,
    threshold: 10,
  });

  const line = viewport.addChild(new Graphics());
  line
    .rect(0, 0, WORLD_WIDTH, WORLD_HEIGHT)
    .setStrokeStyle({
      width: BORDER,
      color: 0xccccff,
      alpha: 1,
    })
    .stroke().zIndex = 0;

  window.addEventListener('resize', () => {
    viewport.resize(
      window.innerWidth,
      window.innerHeight,
      WORLD_WIDTH,
      WORLD_HEIGHT,
    );
  });

  return viewport;
};

export const initializeBuildViewportPlugins = () => {
  viewport.fit().drag().pinch().wheel().decelerate();
};
