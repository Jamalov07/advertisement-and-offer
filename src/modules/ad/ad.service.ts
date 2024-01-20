import { BadRequestException, Inject, Injectable } from '@nestjs/common'
import { Knex } from 'knex'
import {
	AdCreateRequest,
	AdCreateResponse,
	AdDeleteRequest,
	AdDeleteResponse,
	AdFindAllRequest,
	AdFindAllResponse,
	AdFindOneRequest,
	AdFindOneResponse,
	AdUpdateRequest,
	AdUpdateResponse,
} from './interfaces'

@Injectable()
export class AdService {
	constructor(@Inject('KnexConnection') private readonly knex: Knex) {}

	async findAll(payload: AdFindAllRequest): Promise<AdFindAllResponse> {
		const ads = await this.knex('ads')
			.select('*')
			.where('title', 'like', `%${payload.title}%`)
			.where('description', 'like', `%${payload.description}%`)
			// .where('category_id', 'like', payload.category_id)
			.where('deleted_at', null)
			.offset((payload.pageNumber - 1) * payload.pageSize)
			.limit(payload.pageSize)

		const [{ count }] = await this.knex('ads')
			.count()
			.where('title', 'like', `%${payload.title}%`)
			.where('description', 'like', `%${payload.description}%`)
			// .where('category_id', 'like', payload.category_id)
			.where('deleted_at', null)
		return { pageCount: Math.ceil(+count / payload.pageSize), pageSize: ads.length, totalCount: +count, ads: ads }
	}

	async findOne(payload: AdFindOneRequest): Promise<AdFindOneResponse> {
		const ad = await this.knex('ads').select('*').where('id', payload.id).where('deleted_at', null).first()
		if (!ad) {
			throw new BadRequestException('ad not found')
		}
		return ad
	}

	async create(payload: AdCreateRequest): Promise<AdCreateResponse> {
		await this.knex('ads').insert({ ...payload })
		return null
	}

	async update(params: AdFindOneRequest, payload: AdUpdateRequest): Promise<AdUpdateResponse> {
		await this.findOne(params)
		await this.knex('ads')
			.where('id', params.id)
			.update({ ...payload })

		return null
	}

	async delete(payload: AdDeleteRequest): Promise<AdDeleteResponse> {
		await this.findOne(payload)
		await this.knex('ads').where('id', payload.id).update({ deleted_at: new Date() })
		return null
	}
}
