import { IsNumber, IsOptional, IsPositive, IsUUID } from 'class-validator'
import { MessageFindAllRequest, MessageFindAllResponse } from '../interfaces'
import { ApiProperty } from '@nestjs/swagger'
import { MessageFindOneResponseDto } from './message-find-one.dtos'

export class MessageFindAllRequestDto implements MessageFindAllRequest {
	@IsUUID('4')
	@IsOptional()
	from_user_id?: string

	@IsUUID('4')
	@IsOptional()
	to_user_id?: string

	@IsPositive()
	@IsNumber()
	@IsOptional()
	pageNumber?: number

	@IsPositive()
	@IsNumber()
	@IsOptional()
	pageSize?: number
}

export class MessageFindAllResponseDto implements MessageFindAllResponse {
	@ApiProperty({ example: 10 })
	pageSize: number

	@ApiProperty({ example: 100 })
	pageCount: number

	@ApiProperty({ example: 1000 })
	totalCount: number

	@ApiProperty({ example: MessageFindOneResponseDto, isArray: true })
	messages: MessageFindOneResponseDto[]
}
