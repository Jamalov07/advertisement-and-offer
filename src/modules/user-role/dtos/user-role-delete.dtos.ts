import { IsNotEmpty, IsUUID } from 'class-validator'
import { UserRoleDeleteRequest } from '../interfaces'

export class UserRoleDeleteRequestDto implements UserRoleDeleteRequest {
	@IsUUID('4')
	@IsNotEmpty()
	id: string
}
