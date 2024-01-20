import { IsEnum, IsNumber, IsOptional, IsPositive, IsString, IsUUID } from 'class-validator'
import { PermissionFindAllRequest, PermissionFindAllResponse } from '../interfaces'
import { ApiProperty } from '@nestjs/swagger'
import { PermissionFindOneResponseDto } from './permission-find-one.dtos'
import { PermissionMethodEnums } from '../enums'

export class PermissionFindAllRequestDto implements PermissionFindAllRequest {
	@IsUUID('4')
	@IsString()
	@IsOptional()
	role_id?: string

	@IsString()
	@IsOptional()
	url?: string

	@IsEnum(PermissionMethodEnums)
	@IsString()
	@IsOptional()
	method?: PermissionMethodEnums

	@IsNumber()
	@IsPositive()
	@IsOptional()
	pageNumber?: number

	@IsNumber()
	@IsPositive()
	@IsOptional()
	pageSize?: number
}

export class PermissionFindAllResponseDto implements PermissionFindAllResponse {
	@ApiProperty({ example: 10 })
	pageSize: number

	@ApiProperty({ example: 100 })
	pageCount: number

	@ApiProperty({ example: 1000 })
	totalCount: number

	@ApiProperty({ example: PermissionFindOneResponseDto, isArray: true })
	permissions: PermissionFindOneResponseDto[]
}
