import { IsNotEmpty, IsUUID } from 'class-validator'
import { UserRoleCreateRequest } from '../interfaces'

export class UserRoleCreateRequestDto implements UserRoleCreateRequest {
	@IsUUID('4')
	@IsNotEmpty()
	user_id: string

	@IsUUID('4')
	@IsNotEmpty()
	role_id: string
}
