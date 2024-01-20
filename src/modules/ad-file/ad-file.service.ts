import { BadRequestException, Inject, Injectable } from '@nestjs/common'
import { Knex } from 'knex'
import {
	AdFileCreateRequest,
	AdFileCreateResponse,
	AdFileDeleteRequest,
	AdFileDeleteResponse,
	AdFileFindAllRequest,
	AdFileFindAllResponse,
	AdFileFindOneRequest,
	AdFileFindOneResponse,
	AdFileUpdateRequest,
	AdFileUpdateResponse,
} from './interfaces'

@Injectable()
export class AdFileService {
	constructor(@Inject('KnexConnection') private readonly knex: Knex) {}

	async findAll(payload: AdFileFindAllRequest): Promise<AdFileFindAllResponse> {
		const adFiles = await this.knex('ad_files')
			.select('*')
			.where('name', 'like', `%${payload.name}%`)
			.where('deleted_at', null)
			.offset((payload.pageNumber - 1) * payload.pageSize)
			.limit(payload.pageSize)

		const [{ count }] = await this.knex('ad_files').count().where('name', 'like', `%${payload.name}%`).where('deleted_at', null)

		return { pageCount: Math.ceil(+count / payload.pageSize), pageSize: adFiles.length, totalCount: +count, adFiles: adFiles }
	}

	async findOne(payload: AdFileFindOneRequest): Promise<AdFileFindOneResponse> {
		const adFile = await this.knex('ad_files').select('*').where('id', payload.id).where('deleted_at', null).first()
		if (!adFile) {
			throw new BadRequestException('adFile not found')
		}
		return adFile
	}

	async create(payload: AdFileCreateRequest): Promise<AdFileCreateResponse> {
		await this.knex('ad_files').insert({ ...payload })
		return null
	}

	async update(params: AdFileFindOneRequest, payload: AdFileUpdateRequest): Promise<AdFileUpdateResponse> {
		await this.findOne(params)
		await this.knex('ad_files')
			.where('id', params.id)
			.update({ ...payload })

		return null
	}

	async delete(payload: AdFileDeleteRequest): Promise<AdFileDeleteResponse> {
		await this.findOne(payload)
		await this.knex('ad_files').where('id', payload.id).update({ deleted_at: new Date() })
		return null
	}
}
