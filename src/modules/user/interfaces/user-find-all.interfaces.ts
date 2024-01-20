import { UserFindOneRequest } from './user-find-one.interfaces'

export declare interface UserFindAllRequest {
	full_name?: string
	email?: string
	pageNumber?: number
	pageSize?: number
}

export declare interface UserFindAllResponse {
	totalCount: number
	pageCount: number
	pageSize: number
	users: UserFindOneRequest[]
}
