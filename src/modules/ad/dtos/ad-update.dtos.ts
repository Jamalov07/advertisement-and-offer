import { IsDateString, IsOptional, IsString, IsUUID } from 'class-validator'
import { AdUpdateRequest } from '../interfaces'

export class AdUpdateRequestDto implements AdUpdateRequest {
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
}
