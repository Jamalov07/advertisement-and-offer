import { AdCategoryFindOneResponse } from './ad-category-find-one.interfaces'

export declare interface AdCategoryFindAllRequest {
	name?: string
	pageSize?: number
	pageNumber?: number
}

export declare interface AdCategoryFindAllResponse {
	totalCount: number
	pageCount: number
	pageSize: number
	adCategories: AdCategoryFindOneResponse[]
}
