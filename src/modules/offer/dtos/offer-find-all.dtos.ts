import { IsDateString, IsNumber, IsOptional, IsPositive, IsString, IsUUID } from 'class-validator'
import { OfferFindAllRequest, OfferFindAllResponse } from '../interfaces'
import { ApiProperty } from '@nestjs/swagger'
import { OfferFindOneResponseDto } from './offer-find-one.dtos'

export class OfferFindAllRequestDto implements OfferFindAllRequest {
	@IsNumber()
	@IsOptional()
	price?: number

	@IsString()
	@IsOptional()
	description?: string

	@IsUUID('4')
	@IsOptional()
	ad_id?: string

	@IsDateString()
	@IsOptional()
	deadline?: Date

	@IsPositive()
	@IsNumber()
	@IsOptional()
	pageNumber?: number

	@IsPositive()
	@IsNumber()
	@IsOptional()
	pageSize?: number
}

export class OfferFindAllResponseDto implements OfferFindAllResponse {
	@ApiProperty({ example: 10 })
	pageSize: number

	@ApiProperty({ example: 100 })
	pageCount: number

	@ApiProperty({ example: 1000 })
	totalCount: number

	@ApiProperty({ example: OfferFindOneResponseDto, isArray: true })
	offers: OfferFindOneResponseDto[]
}
