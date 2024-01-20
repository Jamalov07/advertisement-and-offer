import { IsOptional, IsString, IsUUID } from 'class-validator'
import { AdFileUpdateRequest } from '../interfaces'

export class AdFileUpdateRequestDto implements AdFileUpdateRequest {
	@IsString()
	@IsOptional()
	name?: string

	@IsUUID('4')
	@IsOptional()
	ad_id: string
}
