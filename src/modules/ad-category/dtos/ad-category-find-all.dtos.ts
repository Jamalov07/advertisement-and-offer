import { IsNumber, IsOptional, IsPositive, IsString } from 'class-validator'
import { AdCategoryFindAllRequest, AdCategoryFindAllResponse } from '../interfaces'
import { ApiProperty } from '@nestjs/swagger'
import { AdCategoryFindOneResponseDto } from './ad-category-find-one.dtos'

export class AdCategoryFindAllRequestDto implements AdCategoryFindAllRequest {
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

export class AdCategoryFindAllResponseDto implements AdCategoryFindAllResponse {
	@ApiProperty({ example: 10 })
	pageSize: number

	@ApiProperty({ example: 100 })
	pageCount: number

	@ApiProperty({ example: 1000 })
	totalCount: number

	@ApiProperty({ example: AdCategoryFindOneResponseDto, isArray: true })
	adCategories: AdCategoryFindOneResponseDto[]
}
