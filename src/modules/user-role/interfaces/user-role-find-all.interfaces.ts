import { UserRoleFindOneResponse } from './user-role-find-one.interfaces'

export declare interface UserRoleFindAllRequest {
	user_id?: string
	role_id?: string
	pageSize?: number
	pageNumber?: number
}

export declare interface UserRoleFindAllResponse {
	totalCount: number
	pageCount: number
	pageSize: number
	userRoles: UserRoleFindOneResponse[]
}
