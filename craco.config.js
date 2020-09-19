const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#69D30B',
                            '@link-color': '#FFFFFF',
                            '@success-color': '#2A94F4', // success state color
                            '@warning-color': '#faad14', // warning state color
                            '@error-color': '#f5222d', // error state color
                            '@font-size-base': '15px', // major text font size
                            '@heading-color': 'rgb(0,48,110)', // heading text color
                            '@text-color': 'rgba(0, 0, 0, 0.80)', // major text color
                            '@text-color-secondary': 'rgb(121,121,121,0.8)' // secondary text color
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};