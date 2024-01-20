import { MessageFindOneResponse } from './message-find-one.interfaces'

export declare interface MessageFindAllRequest {
	from_user_id?: string
	to_user_id?: string
	pageSize?: number
	pageNumber?: number
}

export declare interface MessageFindAllResponse {
	totalCount: number
	pageCount: number
	pageSize: number
	messages: MessageFindOneResponse[]
}
