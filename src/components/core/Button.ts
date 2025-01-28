import { Button as PixiButton, ButtonContainer } from "@pixi/ui";
import { Container, Graphics, TextStyle, Text } from "pixi.js";

interface IButtonProps {
    x?: number;
    y?: number
    width?: number;
    height?: number;
    radius?: number;
    text: string;
    disabled?: boolean;
    onClick?: () => void;

}

const Button = ({
    text,
    x = 0,
    y = 0,
    width = 100,
    height = 35,
    radius = 5,
    disabled = false,
    onClick
}:IButtonProps) => {
    
    const button = new ButtonContainer();
    button.enabled = !disabled;

    button.onPress.connect(() => onClick());

    const buttonView = new Container();
    const buttonBg = new Graphics().roundRect(x, y, width, height, radius)
        .fill(0x22ffff);

    const textStyle = new TextStyle({
        fill: 0x000000,
        fontSize: 12,
        fontFamily: 'Arial',
        fontWeight: 'bold',
    });""
    const textComp = new Text({
                    text: text,
                    style: textStyle
            });

    textComp.anchor.set(0.5);
    textComp.x = buttonBg.width / 2;
    textComp.y = buttonBg.height / 2;

    buttonView.addChild(buttonBg, textComp);

    button.addChild(buttonView);
    return button;
}

export default Button;