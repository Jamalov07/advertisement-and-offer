import { OfferFindOneResponse } from './offer-find-one.interfaces'

export declare interface OfferFindAllRequest {
	price?: number
	description?: string
	ad_id?: string
	deadline?: Date
	pageSize?: number
	pageNumber?: number
}

export declare interface OfferFindAllResponse {
	totalCount: number
	pageCount: number
	pageSize: number
	offers: OfferFindOneResponse[]
}
