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
                responseType: 'arraybuffer'
            })
            this.imageData = Buffer.from(res.data, "utf-8");
            return this
        } catch (err) {
            console.log(err)
            throw new Error('download image failed')
        }
    }

    output = () => {
        console.log(this.imageData)
        fs.writeFile(this.distPath, this.imageData, function(err) {
            console.log(err)
            throw new Error('output image failed')
        })
    }

    addWaterMark = () => {
    }
}

export default ImagesDownloader
