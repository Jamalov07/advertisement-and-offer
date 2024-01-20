import { IsNotEmpty, IsString, IsUUID } from 'class-validator'
import { AdFileCreateRequest } from '../interfaces'

export class AdFileCreateRequestDto implements AdFileCreateRequest {
	@IsString()
	@IsNotEmpty()
	name: string

	@IsUUID('4')
	@IsNotEmpty()
	ad_id: string
}
