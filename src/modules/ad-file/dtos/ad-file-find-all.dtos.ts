import { IsNumber, IsOptional, IsPositive, IsString, IsUUID } from 'class-validator'
import { AdFileFindAllRequest, AdFileFindAllResponse } from '../interfaces'
import { ApiProperty } from '@nestjs/swagger'
import { AdFileFindOneResponseDto } from './ad-file-find-one.dtos'

export class AdFileFindAllRequestDto implements AdFileFindAllRequest {
	@IsString()
	@IsOptional()
	name?: string

	@IsUUID('4')
	@IsOptional()
	ad_id?: string

	@IsPositive()
	@IsNumber()
	@IsOptional()
	pageNumber?: number

	@IsPositive()
	@IsNumber()
	@IsOptional()
	pageSize?: number
}

export class AdFileFindAllResponseDto implements AdFileFindAllResponse {
	@ApiProperty({ example: 10 })
	pageSize: number

	@ApiProperty({ example: 100 })
	pageCount: number

	@ApiProperty({ example: 1000 })
	totalCount: number

	@ApiProperty({ example: AdFileFindOneResponseDto, isArray: true })
	adFiles: AdFileFindOneResponseDto[]
}
