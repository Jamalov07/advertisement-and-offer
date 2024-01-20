import { IsOptional, IsString, IsUUID } from 'class-validator'
import { MessageFileUpdateRequest } from '../interfaces'

export class MessageFileUpdateRequestDto implements MessageFileUpdateRequest {
	@IsString()
	@IsOptional()
	name?: string

	@IsUUID('4')
	@IsOptional()
	message_id: string
}
