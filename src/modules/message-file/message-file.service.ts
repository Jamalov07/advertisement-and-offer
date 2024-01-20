import { BadRequestException, Inject, Injectable } from '@nestjs/common'
import { Knex } from 'knex'
import {
	MessageFileCreateRequest,
	MessageFileCreateResponse,
	MessageFileDeleteRequest,
	MessageFileDeleteResponse,
	MessageFileFindAllRequest,
	MessageFileFindAllResponse,
	MessageFileFindOneRequest,
	MessageFileFindOneResponse,
	MessageFileUpdateRequest,
	MessageFileUpdateResponse,
} from './interfaces'

@Injectable()
export class MessageFileService {
	constructor(@Inject('KnexConnection') private readonly knex: Knex) {}

	async findAll(payload: MessageFileFindAllRequest): Promise<MessageFileFindAllResponse> {
		const messageFiles = await this.knex('message_files')
			.select('*')
			.where('name', 'like', `%${payload.name}%`)
			.where('deleted_at', null)
			.offset((payload.pageNumber - 1) * payload.pageSize)
			.limit(payload.pageSize)

		const [{ count }] = await this.knex('message_files').count().where('name', 'like', `%${payload.name}%`).where('deleted_at', null)

		return { pageCount: Math.ceil(+count / payload.pageSize), pageSize: messageFiles.length, totalCount: +count, messageFiles: messageFiles }
	}

	async findOne(payload: MessageFileFindOneRequest): Promise<MessageFileFindOneResponse> {
		const messageFile = await this.knex('message_files').select('*').where('id', payload.id).where('deleted_at', null).first()
		if (!messageFile) {
			throw new BadRequestException('messageFile not found')
		}
		return messageFile
	}

	async create(payload: MessageFileCreateRequest): Promise<MessageFileCreateResponse> {
		await this.knex('message_files').insert({ ...payload })
		return null
	}

	async update(params: MessageFileFindOneRequest, payload: MessageFileUpdateRequest): Promise<MessageFileUpdateResponse> {
		await this.findOne(params)
		await this.knex('message_files')
			.where('id', params.id)
			.update({ ...payload })

		return null
	}

	async delete(payload: MessageFileDeleteRequest): Promise<MessageFileDeleteResponse> {
		await this.findOne(payload)
		await this.knex('message_files').where('id', payload.id).update({ deleted_at: new Date() })
		return null
	}
}
