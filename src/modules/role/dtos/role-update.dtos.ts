import { IsOptional, IsString } from 'class-validator'
import { RoleUpdateRequest } from '../interfaces'

export class RoleUpdateRequestDto implements RoleUpdateRequest {
	@IsString()
	@IsOptional()
	name?: string
}
