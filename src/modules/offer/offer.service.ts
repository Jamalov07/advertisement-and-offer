import { BadRequestException, Inject, Injectable } from '@nestjs/common'
import { Knex } from 'knex'
import {
	OfferCreateRequest,
	OfferCreateResponse,
	OfferDeleteRequest,
	OfferDeleteResponse,
	OfferFindAllRequest,
	OfferFindAllResponse,
	OfferFindOneRequest,
	OfferFindOneResponse,
	OfferUpdateRequest,
	OfferUpdateResponse,
	OfferUpdateStatusReponse,
	OfferUpdateStatusRequest,
} from './interfaces'

@Injectable()
export class OfferService {
	constructor(@Inject('KnexConnection') private readonly knex: Knex) {}

	async findAll(payload: OfferFindAllRequest): Promise<OfferFindAllResponse> {
		const offers = await this.knex('offers')
			.select('*')
			.where('description', 'like', `%${payload.description}%`)
			// .where('ad_id', 'like', payload.ad_id)
			.where('deleted_at', null)
			.offset((payload.pageNumber - 1) * payload.pageSize)
			.limit(payload.pageSize)

		const [{ count }] = await this.knex('offers')
			.count()
			.where('description', 'like', `%${payload.description}%`)
			// .where('ad_id', 'like', payload.ad_id)
			.where('deleted_at', null)
		return { pageCount: Math.ceil(+count / payload.pageSize), pageSize: offers.length, totalCount: +count, offers: offers }
	}

	async findOne(payload: OfferFindOneRequest): Promise<OfferFindOneResponse> {
		const offer = await this.knex('offers').select('*').where('id', payload.id).where('deleted_at', null).first()
		if (offer) {
			throw new BadRequestException('offer not found')
		}
		return offer
	}

	async create(payload: OfferCreateRequest): Promise<OfferCreateResponse> {
		await this.knex('offers').insert({ ...payload })
		return null
	}

	async update(params: OfferFindOneRequest, payload: OfferUpdateRequest): Promise<OfferUpdateResponse> {
		const offer = await this.findOne(params)
		if (payload.is_best) await this.updateStatus({ ad_id: payload.ad_id ?? offer.id, is_best: payload.is_best })
		await this.knex('offers')
			.where('id', params.id)
			.update({ ...payload })

		return null
	}

	async delete(payload: OfferDeleteRequest): Promise<OfferDeleteResponse> {
		await this.findOne(payload)
		await this.knex('offers').where('id', payload.id).update({ deleted_at: new Date() })
		return null
	}

	async updateStatus(payload: OfferUpdateStatusRequest): Promise<OfferUpdateStatusReponse> {
		const candidate = await this.knex('offers').select('*').where('ad_id', payload.ad_id).where('is_best', true).where('deleted_at', null).first()
		if (candidate) {
			await this.knex('offers').update({ is_best: false }).where('ad_id', payload.ad_id).where('id', candidate.id)
		}
	}
}
