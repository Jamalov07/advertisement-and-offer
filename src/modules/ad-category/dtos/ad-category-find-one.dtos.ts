import { IsNotEmpty, IsUUID } from 'class-validator'
import { AdCategoryFindOneRequest, AdCategoryFindOneResponse } from '../interfaces'
import { ApiProperty } from '@nestjs/swagger'

export class AdCategoryFindOneRequestDto implements AdCategoryFindOneRequest {
	@IsUUID('4')
	@IsNotEmpty()
	id: string
}

export class AdCategoryFindOneResponseDto implements AdCategoryFindOneResponse {
	@ApiProperty({ example: '93ec4553-f6f2-4b3d-80dd-54b7a386f891' })
	id: string

	@ApiProperty({ example: 'role name' })
	name: string

	@ApiProperty({ example: '2024-01-18T17:51:09.625Z' })
	createdAt: Date
}
