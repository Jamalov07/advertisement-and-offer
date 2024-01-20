import { IsNotEmpty, IsUUID } from 'class-validator'
import { UserFindOneRequest, UserFindOneResponse } from '../interfaces'
import { ApiProperty } from '@nestjs/swagger'

export class UserFindOneRequestDto implements UserFindOneRequest {
	@IsUUID('4')
	@IsNotEmpty()
	id: string
}

export class UserFindOneResponseDto implements UserFindOneResponse {
	@ApiProperty({ example: '93ec4553-f6f2-4b3d-80dd-54b7a386f891' })
	id: string

	@ApiProperty({ example: 'jamalov@gmail.com' })
	email: string

	@ApiProperty({ example: 'John Doe' })
	full_name: string

	@ApiProperty({ example: '2024-01-18T17:51:09.625Z' })
	created_at: string
}
