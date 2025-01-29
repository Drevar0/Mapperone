import { Application } from 'pixi.js';
import BaseButton from 'src/components/core/BaseButton';

interface IStaticInterface {
  onSceneChange: (scene: 'build' | 'match') => void;
  app: Application;
}
const staticInterface = ({ onSceneChange, app }: IStaticInterface) => {
  const buildButton = BaseButton({
    text: 'Build',
    x: 10,
    y: 10,
    width: 100,
    height: 35,
    onClick: () => onSceneChange('build'),
    zIndex: 1000,
  });

  const matchButton = BaseButton({
    text: 'Match',
    x: 120,
    y: 10,
    width: 100,
    height: 35,
    onClick: () => onSceneChange('match'),
    zIndex: 1000,
  });

  app.stage.addChild(buildButton, matchButton);
};

export default staticInterface;
