import { IsNumber, IsOptional, IsPositive, IsString } from 'class-validator'
import { UserFindAllRequest, UserFindAllResponse } from '../interfaces'
import { ApiProperty } from '@nestjs/swagger'
import { UserFindOneResponseDto } from './user-find-one.dtos'

export class UserFindAllRequestDto implements UserFindAllRequest {
	@IsString()
	@IsOptional()
	email?: string

	@IsString()
	@IsOptional()
	full_name?: string

	@IsNumber()
	@IsPositive()
	@IsOptional()
	pageNumber?: number

	@IsNumber()
	@IsPositive()
	@IsOptional()
	pageSize?: number
}

export class UserFindAllResponseDto implements UserFindAllResponse {
	@ApiProperty({ example: 10 })
	pageSize: number

	@ApiProperty({ example: 100 })
	pageCount: number

	@ApiProperty({ example: 1000 })
	totalCount: number

	@ApiProperty({ example: UserFindOneResponseDto, isArray: true })
	users: UserFindOneResponseDto[]
}
