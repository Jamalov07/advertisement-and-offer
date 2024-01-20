import { IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator'
import { PermissionCreateRequest } from '../interfaces'
import { PermissionMethodEnums } from '../enums'

export class PermissionCreateRequestDto implements PermissionCreateRequest {
	@IsString()
	@IsNotEmpty()
	url: string

	@IsEnum(PermissionMethodEnums)
	@IsString()
	@IsNotEmpty()
	method: PermissionMethodEnums

	@IsUUID('4')
	@IsNotEmpty()
	role_id: string
}
