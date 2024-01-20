import { IsNumber, IsOptional, IsPositive, IsUUID } from 'class-validator'
import { UserRoleFindAllRequest, UserRoleFindAllResponse } from '../interfaces'
import { ApiProperty } from '@nestjs/swagger'
import { UserRoleFindOneResponseDto } from './user-role-find-one.dtos'

export class UserRoleFindAllRequestDto implements UserRoleFindAllRequest {
	@IsUUID('4')
	@IsOptional()
	user_id?: string

	@IsUUID('4')
	@IsOptional()
	role_id?: string

	@IsPositive()
	@IsNumber()
	@IsOptional()
	pageNumber?: number

	@IsPositive()
	@IsNumber()
	@IsOptional()
	pageSize?: number
}

export class UserRoleFindAllResponseDto implements UserRoleFindAllResponse {
	@ApiProperty({ example: 10 })
	pageSize: number

	@ApiProperty({ example: 100 })
	pageCount: number

	@ApiProperty({ example: 1000 })
	totalCount: number

	@ApiProperty({ example: UserRoleFindOneResponseDto, isArray: true })
	userRoles: UserRoleFindOneResponseDto[]
}
