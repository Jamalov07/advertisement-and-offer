import { IsDateString, IsNotEmpty, IsString, IsUUID } from 'class-validator'
import { AdCreateRequest } from '../interfaces'

export class AdCreateRequestDto implements AdCreateRequest {
	@IsString()
	@IsNotEmpty()
	title: string

	@IsString()
	@IsNotEmpty()
	description: string

	@IsUUID('4')
	@IsNotEmpty()
	category_id: string

	@IsDateString()
	@IsNotEmpty()
	expired_date: Date
}
