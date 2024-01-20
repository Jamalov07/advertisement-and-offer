import { IsOptional, IsString } from 'class-validator'
import { AdCategoryUpdateRequest } from '../interfaces'

export class AdCategoryUpdateRequestDto implements AdCategoryUpdateRequest {
	@IsString()
	@IsOptional()
	name?: string
}
