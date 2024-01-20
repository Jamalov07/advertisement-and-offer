export declare interface UserFindOneRequest {
	id: string
}

export declare interface UserFindOneResponse {
	id: string
	full_name: string
	email: string
	created_at: string
}

export declare interface UserCheckByEmailRequest {
	id?: string
	email: string
}

export declare type UserCheckByEmailResponse = void
