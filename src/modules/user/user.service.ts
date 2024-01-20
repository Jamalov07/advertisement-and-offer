import { BadRequestException, Inject, Injectable } from '@nestjs/common'
import { Knex } from 'knex'
import {
	UserCheckByEmailRequest,
	UserCheckByEmailResponse,
	UserCreateRequest,
	UserCreateResponse,
	UserDeleteRequest,
	UserDeleteResponse,
	UserFindAllRequest,
	UserFindAllResponse,
	UserFindOneRequest,
	UserFindOneResponse,
	UserUpdateRequest,
	UserUpdateResponse,
} from './interfaces'

@Injectable()
export class UserService {
	constructor(@Inject('KnexConnection') private readonly knex: Knex) {}

	async findAll(payload: UserFindAllRequest): Promise<UserFindAllResponse> {
		const users = await this.knex('users')
			.select('*')
			.where('email', 'like', `%${payload.email}%`)
			.where('full_name', 'like', `%${payload.full_name}%`)
			.where('deleted_at', null)
			.offset((payload.pageNumber - 1) * payload.pageSize)
			.limit(payload.pageSize)

		const [{ count }] = await this.knex('users')
			.count()
			.where('email', 'like', `%${payload.email}%`)
			.where('full_name', 'like', `%${payload.full_name}%`)
			.where('deleted_at', null)

		return { pageCount: Math.ceil(+count / payload.pageSize), pageSize: users.length, totalCount: +count, users: users }
	}

	async findOne(payload: UserFindOneRequest): Promise<UserFindOneResponse> {
		const user = await this.knex('users').select('*').where('id', payload.id).where('deleted_at', null).first()
		if (!user) {
			throw new BadRequestException('user not found')
		}
		return user
	}

	async create(payload: UserCreateRequest): Promise<UserCreateResponse> {
		await this.checkByName({ email: payload.email })
		await this.knex('users').insert({ ...payload })
		return null
	}

	async checkByName(payload: UserCheckByEmailRequest): Promise<UserCheckByEmailResponse> {
		const user = await this.knex('users')
			.select('*')
			.where('email', payload.email)
			.whereNot('id', payload.id ?? null)
			.first()
		if (user) {
			throw new BadRequestException('user email already exists')
		}
	}

	async update(params: UserFindOneRequest, payload: UserUpdateRequest): Promise<UserUpdateResponse> {
		await this.findOne(params)
		await this.checkByName({ id: params.id, email: payload.email })
		await this.knex('users')
			.where('id', params.id)
			.update({ ...payload })

		return null
	}

	async delete(payload: UserDeleteRequest): Promise<UserDeleteResponse> {
		await this.findOne(payload)
		await this.knex('users').where('id', payload.id).update({ deleted_at: new Date() })
		return null
	}
}
