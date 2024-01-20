import { AdFileFindOneResponse } from './ad-file-find-one.interfaces'

export declare interface AdFileFindAllRequest {
	name?: string
	ad_id?: string
	pageSize?: number
	pageNumber?: number
}

export declare interface AdFileFindAllResponse {
	totalCount: number
	pageCount: number
	pageSize: number
	adFiles: AdFileFindOneResponse[]
}
