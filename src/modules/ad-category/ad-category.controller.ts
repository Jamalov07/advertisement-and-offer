import { Body, Controller, Delete, Get, Param, Post, Patch, Query } from '@nestjs/common'
import { AdCategoryService } from './ad-category.service'
import { AdCategoryCreateRequestDto, AdCategoryDeleteRequestDto, AdCategoryFindAllRequestDto, AdCategoryFindOneRequestDto, AdCategoryUpdateRequestDto } from './dtos'
import { AdCategoryCreateResponse, AdCategoryDeleteResponse, AdCategoryFindAllResponse, AdCategoryFindOneResponse, AdCategoryUpdateResponse } from './interfaces'

@Controller('ad-category')
export class AdCategoryController {
	constructor(private readonly adCategoryService: AdCategoryService) {
		this.adCategoryService = adCategoryService
	}

	@Get()
	findAll(@Query() payload: AdCategoryFindAllRequestDto): Promise<AdCategoryFindAllResponse> {
		return this.adCategoryService.findAll({ ...payload, pageNumber: payload.pageNumber ?? 1, pageSize: payload.pageSize ?? 10, name: payload.name ?? '' })
	}

	@Get(':id')
	findOne(@Param() payload: AdCategoryFindOneRequestDto): Promise<AdCategoryFindOneResponse> {
		return this.adCategoryService.findOne({ ...payload })
	}

	@Post()
	create(@Body() payload: AdCategoryCreateRequestDto): Promise<AdCategoryCreateResponse> {
		return this.adCategoryService.create({ ...payload })
	}

	@Patch(':id')
	update(@Param() params: AdCategoryFindOneRequestDto, @Body() payload: AdCategoryUpdateRequestDto): Promise<AdCategoryUpdateResponse> {
		return this.adCategoryService.update({ ...params }, { ...payload })
	}

	@Delete(':id')
	delete(@Param() params: AdCategoryDeleteRequestDto): Promise<AdCategoryDeleteResponse> {
		return this.adCategoryService.delete({ ...params })
	}
}
