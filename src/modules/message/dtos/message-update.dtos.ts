import { IsOptional, IsString, IsUUID } from 'class-validator'
import { MessageUpdateRequest } from '../interfaces'

export class MessageUpdateRequestDto implements MessageUpdateRequest {
	@IsUUID('4')
	@IsOptional()
	from_user_id?: string

	@IsUUID('4')
	@IsOptional()
	to_user_id: string

	@IsString()
	@IsOptional()
	message?: string
}
