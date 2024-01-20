import { MessageFileFindOneResponse } from './message-file-find-one.interfaces'

export declare interface MessageFileFindAllRequest {
	name?: string
	message_id?: string
	pageSize?: number
	pageNumber?: number
}

export declare interface MessageFileFindAllResponse {
	totalCount: number
	pageCount: number
	pageSize: number
	messageFiles: MessageFileFindOneResponse[]
}
