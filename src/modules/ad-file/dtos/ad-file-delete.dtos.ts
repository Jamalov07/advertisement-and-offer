import { IsNotEmpty, IsUUID } from 'class-validator'
import { AdFileDeleteRequest } from '../interfaces'

export class AdFileDeleteRequestDto implements AdFileDeleteRequest {
	@IsUUID('4')
	@IsNotEmpty()
	id: string
}
