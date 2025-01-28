import { Container, Graphics, Text, TextStyle } from 'pixi.js';
import { getViewport } from 'src/shared/Viewport';
import { resetView } from 'src/shared/Viewport/resetView';
import BaseButton from 'src/components/core/BaseButton';

export const bottomTollbar = () => {
  const container = new Container({
    width: 200,
    height: 80,
  });
  const addNodeButton = new Graphics();
  const textStyle = new TextStyle({
    fontSize: 12,
    stroke: '#000000',
  });

  container.position.set(window.innerWidth - 120, window.innerHeight - 70);
  container.pivot.set(container.width, container.height);
  container.zIndex = 1000;

  window.addEventListener('resize', () => {
    container.position.set(window.innerWidth - 120, window.innerHeight - 70);
    container.pivot.set(container.width, container.height);
  });

  const button = BaseButton({
    text: 'Reset View',
    onClick: () => {
      resetView(getViewport());
    },
  });

  container.addChild(button);

  return container;
};
