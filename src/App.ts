import { Application, ApplicationOptions } from 'pixi.js';
import { FILL_COLOR } from './shared/constant/constants';

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

})();
