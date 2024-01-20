import { IsOptional, IsUUID } from 'class-validator'
import { UserRoleUpdateRequest } from '../interfaces'

export class UserRoleUpdateRequestDto implements UserRoleUpdateRequest {
	@IsUUID('4')
	@IsOptional()
	user_id?: string

	@IsUUID('4')
	@IsOptional()
	role_id: string
}
