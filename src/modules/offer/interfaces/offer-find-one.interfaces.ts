export declare interface OfferFindOneRequest {
	id: string
}

export declare interface OfferFindOneResponse {
	id: string
	description: string
	price: number
	ad_id: string
	deadline: Date
	is_view: true
	is_best: true
	createdAt: Date
}

export declare interface OfferUpdateStatusRequest {
	ad_id: string
	is_best: boolean
}

export declare type OfferUpdateStatusReponse = void
