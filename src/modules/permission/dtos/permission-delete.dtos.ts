import { IsNotEmpty, IsUUID } from 'class-validator'
import { PermissionDeleteRequest } from '../interfaces'

export class PermissionDeleteRequestDto implements PermissionDeleteRequest {
	@IsUUID('4')
	@IsNotEmpty()
	id: string
}
