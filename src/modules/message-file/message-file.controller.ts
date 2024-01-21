import { Body, Controller, Delete, Get, Param, Post, Patch, Query } from '@nestjs/common'
import { MessageFileService } from './message-file.service'
import { MessageFileCreateRequestDto, MessageFileDeleteRequestDto, MessageFileFindAllRequestDto, MessageFileFindOneRequestDto, MessageFileUpdateRequestDto } from './dtos'
import { MessageFileCreateResponse, MessageFileDeleteResponse, MessageFileFindAllResponse, MessageFileFindOneResponse, MessageFileUpdateResponse } from './interfaces'

@Controller('message-file')
export class MessageFileController {
	constructor(private readonly messageFileService: MessageFileService) {
		this.messageFileService = messageFileService
	}

	@Get()
	findAll(@Query() payload: MessageFileFindAllRequestDto): Promise<MessageFileFindAllResponse> {
		return this.messageFileService.findAll({ ...payload, pageNumber: payload.pageNumber ?? 1, pageSize: payload.pageSize ?? 10, name: payload.name ?? '' })
	}

	@Get(':id')
	findOne(@Param() payload: MessageFileFindOneRequestDto): Promise<MessageFileFindOneResponse> {
		return this.messageFileService.findOne({ ...payload })
	}

	@Post()
	create(@Body() payload: MessageFileCreateRequestDto): Promise<MessageFileCreateResponse> {
		return this.messageFileService.create({ ...payload })
	}

	@Patch(':id')
	update(@Param() params: MessageFileFindOneRequestDto, @Body() payload: MessageFileUpdateRequestDto): Promise<MessageFileUpdateResponse> {
		return this.messageFileService.update({ ...params }, { ...payload })
	}

	@Delete(':id')
	delete(@Param() params: MessageFileDeleteRequestDto): Promise<MessageFileDeleteResponse> {
		return this.messageFileService.delete({ ...params })
	}
}
