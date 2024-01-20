import { IsNotEmpty, IsUUID } from 'class-validator'
import { OfferFindOneRequest, OfferFindOneResponse } from '../interfaces'
import { ApiProperty } from '@nestjs/swagger'

export class OfferFindOneRequestDto implements OfferFindOneRequest {
	@IsUUID('4')
	@IsNotEmpty()
	id: string
}

export class OfferFindOneResponseDto implements OfferFindOneResponse {
	@ApiProperty({ example: '93ec4553-f6f2-4b3d-80dd-54b7a386f891' })
	id: string

	@ApiProperty({ example: 400 })
	price: number

	@ApiProperty({ example: 'ad title' })
	description: string

	@ApiProperty({ example: '93ec4553-f6f2-4b3d-80dd-54b7a386f891' })
	ad_id: string

	@ApiProperty({ example: '2024-01-18T17:51:09.625Z' })
	deadline: Date

	@ApiProperty({ example: true })
	is_best: true

	@ApiProperty({ example: true })
	is_view: true

	@ApiProperty({ example: '2024-01-18T17:51:09.625Z' })
	createdAt: Date
}
