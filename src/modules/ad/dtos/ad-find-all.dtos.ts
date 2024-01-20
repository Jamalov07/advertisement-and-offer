import { IsDateString, IsNumber, IsOptional, IsPositive, IsString, IsUUID } from 'class-validator'
import { AdFindAllRequest, AdFindAllResponse } from '../interfaces'
import { ApiProperty } from '@nestjs/swagger'
import { AdFindOneResponseDto } from './ad-find-one.dtos'

export class AdFindAllRequestDto implements AdFindAllRequest {
	@IsString()
	@IsOptional()
	title?: string

	@IsString()
	@IsOptional()
	description?: string

	@IsUUID('4')
	@IsOptional()
	category_id?: string

	@IsDateString()
	@IsOptional()
	expired_date?: Date

	@IsPositive()
	@IsNumber()
	@IsOptional()
	pageNumber?: number

	@IsPositive()
	@IsNumber()
	@IsOptional()
	pageSize?: number
}

export class AdFindAllResponseDto implements AdFindAllResponse {
	@ApiProperty({ example: 10 })
	pageSize: number

	@ApiProperty({ example: 100 })
	pageCount: number

	@ApiProperty({ example: 1000 })
	totalCount: number

	@ApiProperty({ example: AdFindOneResponseDto, isArray: true })
	ads: AdFindOneResponseDto[]
}
