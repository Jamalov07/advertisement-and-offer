export declare interface MessageFindOneRequest {
	id: string
}

export declare interface MessageFindOneResponse {
	id: string
	from_user_id: string
	to_user_id: string
	message: string
	createdAt: Date
}
