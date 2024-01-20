import { IsNotEmpty, IsUUID } from 'class-validator'
import { PermissionFindOneRequest, PermissionFindOneResponse } from '../interfaces'
import { ApiProperty } from '@nestjs/swagger'

export class PermissionFindOneRequestDto implements PermissionFindOneRequest {
	@IsUUID('4')
	@IsNotEmpty()
	id: string
}

export class PermissionFindOneResponseDto implements PermissionFindOneResponse {
	@ApiProperty({ example: '93ec4553-f6f2-4b3d-80dd-54b7a386f891' })
	id: string

	@ApiProperty({ example: '93ec4553-f6f2-4b3d-80dd-54b7a386f891' })
	role_id: string

	@ApiProperty({ example: '/users' })
	url: string

	@ApiProperty({ example: 'GET' })
	method: string

	@ApiProperty({ example: '2024-01-18T17:51:09.625Z' })
	created_at: string
}
