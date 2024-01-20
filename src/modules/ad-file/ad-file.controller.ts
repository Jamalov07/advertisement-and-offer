import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { AdFileService } from './ad-file.service'
import { AdFileCreateRequestDto, AdFileDeleteRequestDto, AdFileFindAllRequestDto, AdFileFindOneRequestDto, AdFileUpdateRequestDto } from './dtos'
import { AdFileCreateResponse, AdFileDeleteResponse, AdFileFindAllResponse, AdFileFindOneResponse, AdFileUpdateResponse } from './interfaces'

@Controller('ad-file')
export class AdFileController {
	constructor(private readonly adFileService: AdFileService) {
		this.adFileService = adFileService
	}

	@Get()
	findAll(@Query() payload: AdFileFindAllRequestDto): Promise<AdFileFindAllResponse> {
		return this.adFileService.findAll({ ...payload, pageNumber: payload.pageNumber ?? 1, pageSize: payload.pageSize ?? 10, name: payload.name ?? '' })
	}

	@Get(':id')
	findOne(@Param() payload: AdFileFindOneRequestDto): Promise<AdFileFindOneResponse> {
		return this.adFileService.findOne({ ...payload })
	}

	@Post()
	create(@Body() payload: AdFileCreateRequestDto): Promise<AdFileCreateResponse> {
		return this.adFileService.create({ ...payload })
	}

	@Put(':id')
	update(@Param() params: AdFileFindOneRequestDto, @Body() payload: AdFileUpdateRequestDto): Promise<AdFileUpdateResponse> {
		return this.adFileService.update({ ...params }, { ...payload })
	}

	@Delete(':id')
	delete(@Param() params: AdFileDeleteRequestDto): Promise<AdFileDeleteResponse> {
		return this.adFileService.delete({ ...params })
	}
}
