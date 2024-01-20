import { RoleFindOneResponse } from './role-find-one.interfaces'

export declare interface RoleFindAllRequest {
	name?: string
	pageSize?: number
	pageNumber?: number
}

export declare interface RoleFindAllResponse {
	totalCount: number
	pageCount: number
	pageSize: number
	roles: RoleFindOneResponse[]
}
