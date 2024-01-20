import { BadRequestException, Inject, Injectable } from '@nestjs/common'
import { Knex } from 'knex'
import {
	UserRoleCreateRequest,
	UserRoleCreateResponse,
	UserRoleDeleteRequest,
	UserRoleDeleteResponse,
	UserRoleFindAllRequest,
	UserRoleFindAllResponse,
	UserRoleFindOneRequest,
	UserRoleFindOneResponse,
	UserRoleUpdateRequest,
	UserRoleUpdateResponse,
} from './interfaces'

@Injectable()
export class UserRoleService {
	constructor(@Inject('KnexConnection') private readonly knex: Knex) {}

	async findAll(payload: UserRoleFindAllRequest): Promise<UserRoleFindAllResponse> {
		const userRoles = await this.knex('users_roles')
			.select('*')
			.where('deleted_at', null)
			.offset((payload.pageNumber - 1) * payload.pageSize)
			.limit(payload.pageSize)

		const [{ count }] = await this.knex('users_roles').count().where('deleted_at', null)

		return { pageCount: Math.ceil(+count / payload.pageSize), pageSize: userRoles.length, totalCount: +count, userRoles: userRoles }
	}

	async findOne(payload: UserRoleFindOneRequest): Promise<UserRoleFindOneResponse> {
		const userRole = await this.knex('users_roles').select('*').where('id', payload.id).where('deleted_at', null).first()
		if (!userRole) {
			throw new BadRequestException('userRole not found')
		}
		return userRole
	}

	async create(payload: UserRoleCreateRequest): Promise<UserRoleCreateResponse> {
		await this.knex('users_roles').insert({ ...payload })
		return null
	}

	async update(params: UserRoleFindOneRequest, payload: UserRoleUpdateRequest): Promise<UserRoleUpdateResponse> {
		await this.findOne(params)
		await this.knex('users_roles')
			.where('id', params.id)
			.update({ ...payload })

		return null
	}

	async delete(payload: UserRoleDeleteRequest): Promise<UserRoleDeleteResponse> {
		await this.findOne(payload)
		await this.knex('users_roles').where('id', payload.id).update({ deleted_at: new Date() })
		return null
	}
}
