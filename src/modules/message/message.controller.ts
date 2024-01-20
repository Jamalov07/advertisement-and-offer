import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { MessageService } from './message.service'
import { MessageCreateRequestDto, MessageDeleteRequestDto, MessageFindAllRequestDto, MessageFindOneRequestDto, MessageUpdateRequestDto } from './dtos'
import { MessageCreateResponse, MessageDeleteResponse, MessageFindAllResponse, MessageFindOneResponse, MessageUpdateResponse } from './interfaces'

@Controller('message')
export class MessageController {
	constructor(private readonly messageService: MessageService) {
		this.messageService = messageService
	}

	@Get()
	findAll(@Query() payload: MessageFindAllRequestDto): Promise<MessageFindAllResponse> {
		return this.messageService.findAll({ ...payload, pageNumber: payload.pageNumber ?? 1, pageSize: payload.pageSize ?? 10 })
	}

	@Get(':id')
	findOne(@Param() payload: MessageFindOneRequestDto): Promise<MessageFindOneResponse> {
		return this.messageService.findOne({ ...payload })
	}

	@Post()
	create(@Body() payload: MessageCreateRequestDto): Promise<MessageCreateResponse> {
		return this.messageService.create({ ...payload })
	}

	@Put(':id')
	update(@Param() params: MessageFindOneRequestDto, @Body() payload: MessageUpdateRequestDto): Promise<MessageUpdateResponse> {
		return this.messageService.update({ ...params }, { ...payload })
	}

	@Delete(':id')
	delete(@Param() params: MessageDeleteRequestDto): Promise<MessageDeleteResponse> {
		return this.messageService.delete({ ...params })
	}
}
