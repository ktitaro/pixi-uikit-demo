export default {
    framework: '@pixi/storybook-webpack5',
    addons: ['@storybook/addon-essentials'],
    stories: ['../src/**/story.ts'],
    core: {
        disableTelemetry: true,
        channelOptions: {
            allowFunction: false,
            maxDepth: 10,
        },
    },
    features: {
        buildStoriesJson: true,
        breakingChangesV7: true,
    },
}
