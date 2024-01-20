import { IsNumber, IsOptional, IsPositive, IsString } from 'class-validator'
import { RoleFindAllRequest, RoleFindAllResponse } from '../interfaces'
import { ApiProperty } from '@nestjs/swagger'
import { RoleFindOneResponseDto } from './role-find-one.dtos'

export class RoleFindAllRequestDto implements RoleFindAllRequest {
	@IsString()
	@IsOptional()
	name?: string

	@IsPositive()
	@IsNumber()
	@IsOptional()
	pageNumber?: number

	@IsPositive()
	@IsNumber()
	@IsOptional()
	pageSize?: number
}

export class RoleFindAllResponseDto implements RoleFindAllResponse {
	@ApiProperty({ example: 10 })
	pageSize: number

	@ApiProperty({ example: 100 })
	pageCount: number

	@ApiProperty({ example: 1000 })
	totalCount: number

	@ApiProperty({ example: RoleFindOneResponseDto, isArray: true })
	roles: RoleFindOneResponseDto[]
}
