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
  zIndex?: number;
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
  zIndex = 0,
  onClick,
}: IButtonProps) => {
  //base configs
  const button = new PixiButtonContainer();
  button.enabled = !disabled;

  button.onPress.connect(() => onClick());

  const buttonView = new Container();
  const buttonBg = new BaseButtonGraphics();
  buttonBg.styleBase(x, y, width, height, radius, zIndex);

  const buttonText = new ButtonText({
    text,
    x,
    y,
    containerWidth: buttonBg.width,
    containerHeight: buttonBg.height,
    zIndex,
  });
  buttonView.addChild(buttonBg, buttonText);
  button.addChild(buttonView);

  //events
  button.onHover.connect(() => {
    buttonBg.clear();
    buttonBg.styleHover(x, y, width, height, radius, zIndex);
  });
  button.onOut.connect(() => {
    buttonBg.clear();
    buttonBg.styleBase(x, y, width, height, radius, zIndex);
  });

  return button;
};

export default BaseButton;
