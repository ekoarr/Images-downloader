import { ImagesRequestProps, ImagesDownloaderProps, ParsedProps } from './type';

class ImagesDownloader implements ImagesDownloaderProps {

    constructor(private url: string, private outDir: string) { }

    request = () => { }

    output = (): ParsedProps & ImagesRequestProps => {
        return {
            url: '',
            outDir: '',
            success: true,
            path: '',
            size: 122
        }
    }
}

export default ImagesDownloader
