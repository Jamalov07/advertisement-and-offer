import { IsNotEmpty, IsUUID } from 'class-validator'
import { RoleDeleteRequest } from '../interfaces'

export class RoleDeleteRequestDto implements RoleDeleteRequest {
	@IsUUID('4')
	@IsNotEmpty()
	id: string
}
