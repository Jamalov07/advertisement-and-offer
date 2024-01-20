import { IsNotEmpty, IsUUID } from 'class-validator'
import { AdFindOneRequest, AdFindOneResponse } from '../interfaces'
import { ApiProperty } from '@nestjs/swagger'

export class AdFindOneRequestDto implements AdFindOneRequest {
	@IsUUID('4')
	@IsNotEmpty()
	id: string
}

export class AdFindOneResponseDto implements AdFindOneResponse {
	@ApiProperty({ example: '93ec4553-f6f2-4b3d-80dd-54b7a386f891' })
	id: string

	@ApiProperty({ example: 'ad title' })
	title: string

	@ApiProperty({ example: 'ad title' })
	description: string

	@ApiProperty({ example: '93ec4553-f6f2-4b3d-80dd-54b7a386f891' })
	category_id: string

	@ApiProperty({ example: '2024-01-18T17:51:09.625Z' })
	expired_date: Date

	@ApiProperty({ example: '2024-01-18T17:51:09.625Z' })
	createdAt: Date
}
