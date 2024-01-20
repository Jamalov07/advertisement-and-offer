import { AdFindOneResponse } from './ad-find-one.interfaces'

export declare interface AdFindAllRequest {
	title?: string
	description?: string
	category_id?: string
	expired_date?: Date
	pageSize?: number
	pageNumber?: number
}

export declare interface AdFindAllResponse {
	totalCount: number
	pageCount: number
	pageSize: number
	ads: AdFindOneResponse[]
}
