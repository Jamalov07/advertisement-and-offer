import { IsNotEmpty, IsUUID } from 'class-validator'
import { MessageDeleteRequest } from '../interfaces'

export class MessageDeleteRequestDto implements MessageDeleteRequest {
	@IsUUID('4')
	@IsNotEmpty()
	id: string
}
