import { IsNotEmpty, IsUUID } from 'class-validator'
import { AdCategoryDeleteRequest } from '../interfaces'

export class AdCategoryDeleteRequestDto implements AdCategoryDeleteRequest {
	@IsUUID('4')
	@IsNotEmpty()
	id: string
}
