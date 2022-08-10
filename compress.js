const { compress } = require('compress-images/promise');

async function processImages(input, output) {
    const result = await compress({
        source: input,
        destination: output,
        enginesSetup: {
            jpg: { engine: 'mozjpeg', command: ['-quality', '60']},
            png: { engine: 'pngquant', command: ['--quality=20-50', '-o']},
        }
    });

    const { statistics, errors } = result;
    // statistics - all processed images list
    // errors - all errros happened list
};

processImages('./largeImages/_levels/*.{jpg,JPG,jpeg,JPEG,png}', './src/assets/levels/').then((val) => {
    return val;
});


processImages('./largeImages/_content/*.{jpg,JPG,jpeg,JPEG,png}', './src/assets/content/').then((val) => {
    return val;
});