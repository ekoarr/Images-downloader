
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
    download: () => void
    output: ()=>void
    addWaterMark: () => void
}

type ResultSuccess<T> = { type: 'success'; value: T }

type ResultError = { type: 'error'; error: Error }

type Result<T> = ResultSuccess<T> | ResultError