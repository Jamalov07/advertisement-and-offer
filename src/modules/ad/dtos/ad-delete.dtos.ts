import { IsNotEmpty, IsUUID } from 'class-validator'
import { AdDeleteRequest } from '../interfaces'

export class AdDeleteRequestDto implements AdDeleteRequest {
	@IsUUID('4')
	@IsNotEmpty()
	id: string
}
