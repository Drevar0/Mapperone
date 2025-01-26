import { Application, ApplicationOptions, Container } from 'pixi.js';
import { FILL_COLOR } from './shared/constant/constants';

import { Graphics } from 'pixi.js';

import { Button } from '@pixi/ui';

// Asynchronous IIFE
(async () =>
{
    const canvas = document.getElementById("pixi-screen") as HTMLCanvasElement;
    const resizeTo = window;
    const resolution = window.devicePixelRatio || 1;
    const autoDensity = true;
    const backgroundColor = FILL_COLOR;
    const appOptions: Partial<ApplicationOptions> = {
        canvas,
        resizeTo,
        resolution,
        autoDensity,
        backgroundColor
    }


    // Create a PixiJS application.
    const app = new Application();

    // Intialize the application.
    await app.init(appOptions);

    // Create a new instance of the Graphics class.
    const graphics = new Graphics();
    
    //add reactangle    
    graphics.rect(0, 0, 100, 100).fill(0xff0000);

    // Add the graphics to the stage.

    //add button
    const container = new Container();
    const button = new Button(
        new Graphics()
            .rect(200, 100, 100, 50)
            .fill(0x22FFFF)
   );
   
   button.onPress.connect(() => console.log('onPress'));
   
   container.addChild(button.view);
    app.stage.addChild(graphics);
    app.stage.addChild(container);
})();
