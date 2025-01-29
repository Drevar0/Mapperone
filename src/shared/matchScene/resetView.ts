import { Viewport } from 'pixi-viewport';

export const resetView = (viewport: Viewport) => {
  viewport.setZoom(1);
  viewport.moveCenter(100, 100);
};
