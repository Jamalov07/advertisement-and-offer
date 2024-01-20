import { IsEmail, IsOptional, IsString } from 'class-validator'
import { UserUpdateRequest } from '../interfaces'

export class UserUpdateRequestDto implements UserUpdateRequest {
	@IsEmail()
	@IsString()
	@IsOptional()
	email: string

	@IsString()
	@IsOptional()
	full_name: string

	@IsString()
	@IsOptional()
	password: string
}
