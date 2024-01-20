import { IsEnum, IsOptional, IsString, IsUUID } from 'class-validator'
import { PermissionUpdateRequest } from '../interfaces'
import { PermissionMethodEnums } from '../enums'

export class PermissionUpdateRequestDto implements PermissionUpdateRequest {
	@IsEnum(PermissionMethodEnums)
	@IsOptional()
	method?: PermissionMethodEnums

	@IsString()
	@IsOptional()
	url?: string

	@IsUUID('4')
	@IsOptional()
	role_id?: string
}
