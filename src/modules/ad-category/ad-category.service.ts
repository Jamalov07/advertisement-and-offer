import { BadRequestException, Inject, Injectable } from '@nestjs/common'
import { Knex } from 'knex'
import {
	AdCategoryCheckByNameRequest,
	AdCategoryCheckByNameResponse,
	AdCategoryCreateRequest,
	AdCategoryCreateResponse,
	AdCategoryDeleteRequest,
	AdCategoryDeleteResponse,
	AdCategoryFindAllRequest,
	AdCategoryFindAllResponse,
	AdCategoryFindOneRequest,
	AdCategoryFindOneResponse,
	AdCategoryUpdateRequest,
	AdCategoryUpdateResponse,
} from './interfaces'

@Injectable()
export class AdCategoryService {
	constructor(@Inject('KnexConnection') private readonly knex: Knex) {}

	async findAll(payload: AdCategoryFindAllRequest): Promise<AdCategoryFindAllResponse> {
		const adCategories = await this.knex('ad_categories')
			.select('*')
			.where('name', 'like', `%${payload.name}%`)
			.where('deleted_at', null)
			.offset((payload.pageNumber - 1) * payload.pageSize)
			.limit(payload.pageSize)

		const [{ count }] = await this.knex('ad_categories').count().where('name', 'like', `%${payload.name}%`).where('deleted_at', null)

		return { pageCount: Math.ceil(+count / payload.pageSize), pageSize: adCategories.length, totalCount: +count, adCategories: adCategories }
	}

	async findOne(payload: AdCategoryFindOneRequest): Promise<AdCategoryFindOneResponse> {
		const adCategory = await this.knex('ad_categories').select('*').where('id', payload.id).where('deleted_at', null).first()
		if (!adCategory) {
			throw new BadRequestException('adCategory not found')
		}
		return adCategory
	}

	async create(payload: AdCategoryCreateRequest): Promise<AdCategoryCreateResponse> {
		await this.checkByName({ name: payload.name })
		await this.knex('ad_categories').insert({ ...payload })
		return null
	}

	async checkByName(payload: AdCategoryCheckByNameRequest): Promise<AdCategoryCheckByNameResponse> {
		const adCategory = await this.knex('ad_categories')
			.select('*')
			.where('name', payload.name)
			.whereNot('id', payload.id ?? null)
			.first()
		if (adCategory) {
			throw new BadRequestException('adCategory name already exists')
		}
	}

	async update(params: AdCategoryFindOneRequest, payload: AdCategoryUpdateRequest): Promise<AdCategoryUpdateResponse> {
		await this.findOne(params)
		await this.checkByName({ id: params.id, name: payload.name })
		await this.knex('ad_categories')
			.where('id', params.id)
			.update({ ...payload })

		return null
	}

	async delete(payload: AdCategoryDeleteRequest): Promise<AdCategoryDeleteResponse> {
		await this.findOne(payload)
		await this.knex('ad_categories').where('id', payload.id).update({ deleted_at: new Date() })
		return null
	}
}
