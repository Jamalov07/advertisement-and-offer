import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator'
import { OfferCreateRequest } from '../interfaces'

export class OfferCreateRequestDto implements OfferCreateRequest {
	@IsNumber()
	@IsNotEmpty()
	price: number

	@IsString()
	@IsNotEmpty()
	description: string

	@IsUUID('4')
	@IsNotEmpty()
	ad_id: string

	@IsBoolean()
	@IsOptional()
	is_view: boolean

	@IsBoolean()
	@IsOptional()
	is_best: boolean

	@IsDateString()
	@IsNotEmpty()
	deadline: Date
}
