import { Viewport } from 'pixi-viewport';
import { EventSystem, Graphics } from 'pixi.js';
import { BORDER, WORLD_HEIGHT, WORLD_WIDTH } from 'src/constant/viewport';

let viewport: Viewport;

interface IViewport {
  events: EventSystem;
  type: 'match' | 'build';
}

export const getViewport = () => viewport;

export const setBorderStyle = (border: Graphics, color: number) => {
  border
    .clear()
    .rect(0, 0, WORLD_WIDTH, WORLD_HEIGHT)
    .setStrokeStyle({ width: BORDER, color, alpha: 1 })
    .stroke();
};

export const initializeViewport = ({ events, type }: IViewport) => {
  viewport = new Viewport({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    worldWidth: WORLD_WIDTH,
    worldHeight: WORLD_HEIGHT,
    events: events, // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
    threshold: 10,
  });

  const line = viewport.addChild(new Graphics({}));
  line.label = 'viewportBorder';
  setBorderStyle(line, type === 'build' ? 0xffcccc : 0xccffcc);

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

export const initializeViewportPlugins = () => {
  viewport.fit().drag().pinch().wheel().decelerate();
};
