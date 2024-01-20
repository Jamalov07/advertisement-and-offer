import { IsNotEmpty, IsString, IsUUID } from 'class-validator'
import { MessageFileCreateRequest } from '../interfaces'

export class MessageFileCreateRequestDto implements MessageFileCreateRequest {
	@IsString()
	@IsNotEmpty()
	name: string

	@IsUUID('4')
	@IsNotEmpty()
	message_id: string
}
