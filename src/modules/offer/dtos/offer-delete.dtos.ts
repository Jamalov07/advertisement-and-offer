import { IsNotEmpty, IsUUID } from 'class-validator'
import { OfferDeleteRequest } from '../interfaces'

export class OfferDeleteRequestDto implements OfferDeleteRequest {
	@IsUUID('4')
	@IsNotEmpty()
	id: string
}
