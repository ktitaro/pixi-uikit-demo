import '../src/assets/styles/global.css'

export const parameters = {
    layout: 'fullscreen',
    pixi: {
        applicationOptions: {
            backgroundColor: 0x1099bb,
            resolution: 1,
        },
        resizeFn: (w, h) => ({
            canvasWidth: w,
            canvasHeight: h,
            rendererWidth: w,
            rendererHeight: h,
        }),
    },
}
