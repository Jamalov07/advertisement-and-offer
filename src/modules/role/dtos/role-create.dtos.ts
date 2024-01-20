import { IsNotEmpty, IsString } from 'class-validator'
import { RoleCreateRequest } from '../interfaces'

export class RoleCreateRequestDto implements RoleCreateRequest {
	@IsString()
	@IsNotEmpty()
	name: string
}
