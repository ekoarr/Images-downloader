import ImagesDownloader from '../src/images-downloader';
import { ImagesRequestProps } from '../src/type';
import { expect, should } from 'chai';
import 'mocha';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';

describe('Init ImagesDownloader function', () => {
    it('should return ImagesRequestProps', () => {
        const download1 = new ImagesDownloader('', '');
        let result: ImagesRequestProps = download1.output()
        expect(result).to.be.an('object');
        expect(result).to.include.keys('url', 'outDir');
    });
});