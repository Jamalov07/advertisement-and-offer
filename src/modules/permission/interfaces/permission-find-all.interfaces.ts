import { PermissionFindOneRequest } from './permission-find-one.interfaces'

export declare interface PermissionFindAllRequest {
	method?: string
	url?: string
	role_id?: string
	pageNumber?: number
	pageSize?: number
}

export declare interface PermissionFindAllResponse {
	totalCount: number
	pageCount: number
	pageSize: number
	permissions: PermissionFindOneRequest[]
}
