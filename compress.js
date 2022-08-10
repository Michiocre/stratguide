const { compress } = require('compress-images/promise');

const input = './src/assets/levels/*.{jpg,JPG,jpeg,JPEG,png}';
const output = './docs/assets/levels/';

async function processImages() {
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

processImages().then((val) => {
    return val;
});