import { Viewport } from 'pixi-viewport';
import { WORLD_HEIGHT, WORLD_WIDTH } from '../constant/viewport';

export const resetView = (viewport: Viewport) => {
  viewport.setZoom(1);
  viewport.moveCenter(WORLD_WIDTH / 2, WORLD_HEIGHT / 2);
};
