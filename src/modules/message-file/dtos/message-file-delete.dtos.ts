import { IsNotEmpty, IsUUID } from 'class-validator'
import { MessageFileDeleteRequest } from '../interfaces'

export class MessageFileDeleteRequestDto implements MessageFileDeleteRequest {
	@IsUUID('4')
	@IsNotEmpty()
	id: string
}
