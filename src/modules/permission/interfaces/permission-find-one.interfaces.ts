export declare interface PermissionFindOneRequest {
	id: string
}

export declare interface PermissionFindOneResponse {
	id: string
	method: string
	url: string
	role_id: string
	created_at: string
}

export declare interface PermissionCheckRequest {
	id?: string
	method: string
	role_id: string
	url: string
}

export declare type PermissionCheckResponse = void
