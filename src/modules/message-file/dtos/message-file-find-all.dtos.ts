import { IsNumber, IsOptional, IsPositive, IsString, IsUUID } from 'class-validator'
import { MessageFileFindAllRequest, MessageFileFindAllResponse } from '../interfaces'
import { ApiProperty } from '@nestjs/swagger'
import { MessageFileFindOneResponseDto } from './message-file-find-one.dtos'

export class MessageFileFindAllRequestDto implements MessageFileFindAllRequest {
	@IsString()
	@IsOptional()
	name?: string

	@IsUUID('4')
	@IsOptional()
	message_id?: string

	@IsPositive()
	@IsNumber()
	@IsOptional()
	pageNumber?: number

	@IsPositive()
	@IsNumber()
	@IsOptional()
	pageSize?: number
}

export class MessageFileFindAllResponseDto implements MessageFileFindAllResponse {
	@ApiProperty({ example: 10 })
	pageSize: number

	@ApiProperty({ example: 100 })
	pageCount: number

	@ApiProperty({ example: 1000 })
	totalCount: number

	@ApiProperty({ example: MessageFileFindOneResponseDto, isArray: true })
	messageFiles: MessageFileFindOneResponseDto[]
}
