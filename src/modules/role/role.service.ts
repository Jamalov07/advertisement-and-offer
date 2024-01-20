import { BadRequestException, Inject, Injectable } from '@nestjs/common'
import { Knex } from 'knex'
import {
	RoleCheckByNameRequest,
	RoleCheckByNameResponse,
	RoleCreateRequest,
	RoleCreateResponse,
	RoleDeleteRequest,
	RoleDeleteResponse,
	RoleFindAllRequest,
	RoleFindAllResponse,
	RoleFindOneRequest,
	RoleFindOneResponse,
	RoleUpdateRequest,
	RoleUpdateResponse,
} from './interfaces'

@Injectable()
export class RoleService {
	constructor(@Inject('KnexConnection') private readonly knex: Knex) {}

	async findAll(payload: RoleFindAllRequest): Promise<RoleFindAllResponse> {
		const roles = await this.knex('roles')
			.select('*')
			.where('name', 'like', `%${payload.name}%`)
			.where('deleted_at', null)
			.offset((payload.pageNumber - 1) * payload.pageSize)
			.limit(payload.pageSize)

		const [{ count }] = await this.knex('roles').count().where('name', 'like', `%${payload.name}%`).where('deleted_at', null)

		return { pageCount: Math.ceil(+count / payload.pageSize), pageSize: roles.length, totalCount: +count, roles: roles }
	}

	async findOne(payload: RoleFindOneRequest): Promise<RoleFindOneResponse> {
		const role = await this.knex('roles').select('*').where('id', payload.id).where('deleted_at', null).first()
		if (!role) {
			throw new BadRequestException('role not found')
		}
		return role
	}

	async create(payload: RoleCreateRequest): Promise<RoleCreateResponse> {
		await this.checkByName({ name: payload.name })
		await this.knex('roles').insert({ ...payload })
		return null
	}

	async checkByName(payload: RoleCheckByNameRequest): Promise<RoleCheckByNameResponse> {
		const role = await this.knex('roles')
			.select('*')
			.where('name', payload.name)
			.whereNot('id', payload.id ?? null)
			.first()
		if (role) {
			throw new BadRequestException('role name already exists')
		}
	}

	async update(params: RoleFindOneRequest, payload: RoleUpdateRequest): Promise<RoleUpdateResponse> {
		await this.findOne(params)
		await this.checkByName({ id: params.id, name: payload.name })
		await this.knex('roles')
			.where('id', params.id)
			.update({ ...payload })

		return null
	}

	async delete(payload: RoleDeleteRequest): Promise<RoleDeleteResponse> {
		await this.findOne(payload)
		await this.knex('roles').where('id', payload.id).update({ deleted_at: new Date() })
		return null
	}
}
