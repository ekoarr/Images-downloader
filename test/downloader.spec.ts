import ImagesDownloader from '../src/images-downloader';
import { ImagesRequestProps } from '../src/type';
import { expect, should } from 'chai';
import 'mocha';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';

describe('Init ImagesDownloader function', () => {
    it('should return ImagesRequestProps', async () => {
        const download1 = new ImagesDownloader('https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png', 1, 'test');
        let result = (await download1.download()).output();
        expect(result).to.be.an('object');
    });
});