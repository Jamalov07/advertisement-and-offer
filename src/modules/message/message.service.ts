import { BadRequestException, Inject, Injectable } from '@nestjs/common'
import { Knex } from 'knex'
import {
	MessageCreateRequest,
	MessageCreateResponse,
	MessageDeleteRequest,
	MessageDeleteResponse,
	MessageFindAllRequest,
	MessageFindAllResponse,
	MessageFindOneRequest,
	MessageFindOneResponse,
	MessageUpdateRequest,
	MessageUpdateResponse,
} from './interfaces'

@Injectable()
export class MessageService {
	constructor(@Inject('KnexConnection') private readonly knex: Knex) {}

	async findAll(payload: MessageFindAllRequest): Promise<MessageFindAllResponse> {
		const messages = await this.knex('messages')
			.select('*')
			.where('deleted_at', null)
			.offset((payload.pageNumber - 1) * payload.pageSize)
			.limit(payload.pageSize)

		const [{ count }] = await this.knex('messages').count().where('deleted_at', null)

		return { pageCount: Math.ceil(+count / payload.pageSize), pageSize: messages.length, totalCount: +count, messages: messages }
	}

	async findOne(payload: MessageFindOneRequest): Promise<MessageFindOneResponse> {
		const message = await this.knex('messages').select('*').where('id', payload.id).where('deleted_at', null).first()
		if (!message) {
			throw new BadRequestException('message not found')
		}
		return message
	}

	async create(payload: MessageCreateRequest): Promise<MessageCreateResponse> {
		await this.knex('messages').insert({ ...payload })
		return null
	}

	async update(params: MessageFindOneRequest, payload: MessageUpdateRequest): Promise<MessageUpdateResponse> {
		await this.findOne(params)
		await this.knex('messages')
			.where('id', params.id)
			.update({ ...payload })

		return null
	}

	async delete(payload: MessageDeleteRequest): Promise<MessageDeleteResponse> {
		await this.findOne(payload)
		await this.knex('messages').where('id', payload.id).update({ deleted_at: new Date() })
		return null
	}
}
