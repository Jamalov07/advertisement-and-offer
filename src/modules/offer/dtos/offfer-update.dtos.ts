import { IsBoolean, IsDateString, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator'
import { OfferUpdateRequest } from '../interfaces'

export class OfferUpdateRequestDto implements OfferUpdateRequest {
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

	@IsBoolean()
	@IsOptional()
	is_view?: boolean

	@IsBoolean()
	@IsOptional()
	is_best?: boolean
}
