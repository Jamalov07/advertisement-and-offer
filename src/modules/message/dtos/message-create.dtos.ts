import { IsNotEmpty, IsUUID } from 'class-validator'
import { MessageCreateRequest } from '../interfaces'

export class MessageCreateRequestDto implements MessageCreateRequest {
	@IsUUID('4')
	@IsNotEmpty()
	from_user_id: string

	@IsUUID('4')
	@IsNotEmpty()
	to_user_id: string
}
