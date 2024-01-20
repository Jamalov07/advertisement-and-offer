import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { OfferService } from './offer.service'
import { OfferCreateRequestDto, OfferDeleteRequestDto, OfferFindAllRequestDto, OfferFindOneRequestDto, OfferUpdateRequestDto } from './dtos'
import { OfferCreateResponse, OfferDeleteResponse, OfferFindAllResponse, OfferFindOneResponse, OfferUpdateResponse } from './interfaces'

@Controller('offer')
export class OfferController {
	constructor(private readonly offerService: OfferService) {
		this.offerService = offerService
	}

	@Get()
	findAll(@Query() payload: OfferFindAllRequestDto): Promise<OfferFindAllResponse> {
		return this.offerService.findAll({
			...payload,
			pageNumber: payload.pageNumber ?? 1,
			pageSize: payload.pageSize ?? 10,
			description: payload.description ?? '',
		})
	}

	@Get(':id')
	findOne(@Param() payload: OfferFindOneRequestDto): Promise<OfferFindOneResponse> {
		return this.offerService.findOne({ ...payload })
	}

	@Post()
	create(@Body() payload: OfferCreateRequestDto): Promise<OfferCreateResponse> {
		return this.offerService.create({ ...payload })
	}

	@Put(':id')
	update(@Param() params: OfferFindOneRequestDto, @Body() payload: OfferUpdateRequestDto): Promise<OfferUpdateResponse> {
		return this.offerService.update({ ...params }, { ...payload })
	}

	@Delete(':id')
	delete(@Param() params: OfferDeleteRequestDto): Promise<OfferDeleteResponse> {
		return this.offerService.delete({ ...params })
	}
}
