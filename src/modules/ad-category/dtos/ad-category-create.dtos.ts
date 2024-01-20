import { IsNotEmpty, IsString } from 'class-validator'
import { AdCategoryCreateRequest } from '../interfaces'

export class AdCategoryCreateRequestDto implements AdCategoryCreateRequest {
	@IsString()
	@IsNotEmpty()
	name: string
}
