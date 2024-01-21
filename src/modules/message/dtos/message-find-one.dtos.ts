import { IsNotEmpty, IsUUID } from 'class-validator'
import { MessageFindOneRequest, MessageFindOneResponse } from '../interfaces'
import { ApiProperty } from '@nestjs/swagger'

export class MessageFindOneRequestDto implements MessageFindOneRequest {
	@IsUUID('4')
	@IsNotEmpty()
	id: string
}

export class MessageFindOneResponseDto implements MessageFindOneResponse {
	@ApiProperty({ example: '93ec4553-f6f2-4b3d-80dd-54b7a386f891' })
	id: string

	@ApiProperty({ example: '93ec4553-f6f2-4b3d-80dd-54b7a386f891' })
	from_user_id: string

	@ApiProperty({ example: '93ec4553-f6f2-4b3d-80dd-54b7a386f891' })
	to_user_id: string

	@ApiProperty({ example: 'hello' })
	message: string

	@ApiProperty({ example: '2024-01-18T17:51:09.625Z' })
	createdAt: Date
}
