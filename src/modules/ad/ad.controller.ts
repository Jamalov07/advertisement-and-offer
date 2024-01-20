import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { AdService } from './ad.service'
import { AdCreateRequestDto, AdDeleteRequestDto, AdFindAllRequestDto, AdFindOneRequestDto, AdUpdateRequestDto } from './dtos'
import { AdCreateResponse, AdDeleteResponse, AdFindAllResponse, AdFindOneResponse, AdUpdateResponse } from './interfaces'

@Controller('ad')
export class AdController {
	constructor(private readonly adService: AdService) {
		this.adService = adService
	}

	@Get()
	findAll(@Query() payload: AdFindAllRequestDto): Promise<AdFindAllResponse> {
		return this.adService.findAll({
			...payload,
			pageNumber: payload.pageNumber ?? 1,
			pageSize: payload.pageSize ?? 10,
			title: payload.title ?? '',
			description: payload.description ?? '',
		})
	}

	@Get(':id')
	findOne(@Param() payload: AdFindOneRequestDto): Promise<AdFindOneResponse> {
		return this.adService.findOne({ ...payload })
	}

	@Post()
	create(@Body() payload: AdCreateRequestDto): Promise<AdCreateResponse> {
		return this.adService.create({ ...payload })
	}

	@Put(':id')
	update(@Param() params: AdFindOneRequestDto, @Body() payload: AdUpdateRequestDto): Promise<AdUpdateResponse> {
		return this.adService.update({ ...params }, { ...payload })
	}

	@Delete(':id')
	delete(@Param() params: AdDeleteRequestDto): Promise<AdDeleteResponse> {
		return this.adService.delete({ ...params })
	}
}
