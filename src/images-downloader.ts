import axios from 'axios';
import * as path from 'path';
import * as fs from 'fs';
import { ImagesRequestProps, ImagesDownloaderProps, ParsedProps } from './type';
class ImagesDownloader implements ImagesDownloaderProps {

    private rawPath: string;
    private distPath: string;
    private imageData: Buffer;
    constructor(private url: string, private key: number, private outDir: string) {
        this.rawPath = path.resolve(__dirname, 'images', 'raw', `${key}.jpg`);
        this.distPath = path.resolve(__dirname, 'images', `${key}.jpg`);
    }

    download = async () => {
        try {
            const res = await axios({
                method: 'get',
                url: this.url,
                responseType: 'stream'
            })
            this.imageData = res.data
            return this
        } catch (err) {
            throw new Error('download image failed')
        }
    }

    addWaterMark = () => {
    }
}

export default ImagesDownloader
