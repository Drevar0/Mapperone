import { ButtonContainer as PixiButtonContainer } from '@pixi/ui';
import { Container } from 'pixi.js';
import ButtonText from 'src/components/StyleExtension/ButtonText';
import BaseButtonGraphics from 'src/components/StyleExtension/BaseButtonGraphics';

interface IButtonProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  radius?: number;
  text?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const BaseButton = ({
  text,
  x = 0,
  y = 0,
  width = 100,
  height = 35,
  radius = 5,
  disabled = false,
  onClick,
}: IButtonProps) => {
  //base configs
  const button = new PixiButtonContainer();
  button.enabled = !disabled;

  button.onPress.connect(() => onClick());

  const buttonView = new Container();
  const buttonBg = new BaseButtonGraphics();
  buttonBg.styleBase(x, y, width, height, radius);

  const buttonText = new ButtonText({
    text,
    containerWidth: buttonBg.width,
    containerHeight: buttonBg.height,
  });
  buttonView.addChild(buttonBg, buttonText);
  button.addChild(buttonView);

  //events
  button.onHover.connect(() => {
    buttonBg.clear();
    buttonBg.styleHover(x, y, width, height, radius);
  });
  button.onOut.connect(() => {
    buttonBg.clear();
    buttonBg.styleBase(x, y, width, height, radius);
  });

  return button;
};

export default BaseButton;
