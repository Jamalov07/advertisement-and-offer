export declare interface AdCategoryFindOneRequest {
	id: string
}

export declare interface AdCategoryFindOneResponse {
	id: string
	name: string
	createdAt: Date
}

export declare interface AdCategoryCheckByNameRequest {
	id?: string
	name: string
}

export declare type AdCategoryCheckByNameResponse = void
