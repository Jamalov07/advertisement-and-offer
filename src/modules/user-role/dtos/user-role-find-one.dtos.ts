import { IsNotEmpty, IsUUID } from 'class-validator'
import { UserRoleFindOneRequest, UserRoleFindOneResponse } from '../interfaces'
import { ApiProperty } from '@nestjs/swagger'

export class UserRoleFindOneRequestDto implements UserRoleFindOneRequest {
	@IsUUID('4')
	@IsNotEmpty()
	id: string
}

export class UserRoleFindOneResponseDto implements UserRoleFindOneResponse {
	@ApiProperty({ example: '93ec4553-f6f2-4b3d-80dd-54b7a386f891' })
	id: string

	@ApiProperty({ example: '93ec4553-f6f2-4b3d-80dd-54b7a386f891' })
	user_id: string

	@ApiProperty({ example: '93ec4553-f6f2-4b3d-80dd-54b7a386f891' })
	role_id: string

	@ApiProperty({ example: '2024-01-18T17:51:09.625Z' })
	createdAt: Date
}
