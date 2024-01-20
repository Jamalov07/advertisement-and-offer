import { IsEmail, IsNotEmpty, IsString } from 'class-validator'
import { UserCreateRequest } from '../interfaces'

export class UserCreateRequestDto implements UserCreateRequest {
	@IsEmail()
	@IsString()
	@IsNotEmpty()
	email: string

	@IsString()
	@IsNotEmpty()
	full_name: string

	@IsString()
	@IsNotEmpty()
	password: string
}
