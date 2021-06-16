
export interface ImagesRequestProps {
    url: string
    dimansion?: number
    outDir: string
}

export interface ParsedProps extends ImagesRequestProps {
    success: boolean,
    path: string,
    size: number
}

export interface ImagesDownloaderProps {
    request: () => void
    output: () => ParsedProps & ImagesRequestProps
}