import { BadRequestException, Inject, Injectable } from '@nestjs/common'
import { Knex } from 'knex'
import {
	PermissionCheckRequest,
	PermissionCheckResponse,
	PermissionCreateRequest,
	PermissionCreateResponse,
	PermissionDeleteRequest,
	PermissionDeleteResponse,
	PermissionFindAllRequest,
	PermissionFindAllResponse,
	PermissionFindOneRequest,
	PermissionFindOneResponse,
	PermissionUpdateRequest,
	PermissionUpdateResponse,
} from './interfaces'

@Injectable()
export class PermissionService {
	constructor(@Inject('KnexConnection') private readonly knex: Knex) {}

	async findAll(payload: PermissionFindAllRequest): Promise<PermissionFindAllResponse> {
		const permissions = await this.knex('permissions')
			.select('*')
			.where('url', 'like', `%${payload.url}%`)
			// .where('method', payload.method)
			// .where('role_id', payload.role_id)
			.where('deleted_at', null)
			.offset((payload.pageNumber - 1) * payload.pageSize)
			.limit(payload.pageSize)

		const [{ count }] = await this.knex('permissions')
			.count()
			.where('url', 'like', `%${payload.url}%`)
			// .where('method', payload.method)
			// .where('role_id', payload.role_id)
			.where('deleted_at', null)

		return { pageCount: Math.ceil(+count / payload.pageSize), pageSize: permissions.length, totalCount: +count, permissions: permissions }
	}

	async findOne(payload: PermissionFindOneRequest): Promise<PermissionFindOneResponse> {
		const permission = await this.knex('permissions').select('*').where('id', payload.id).where('deleted_at', null).first()
		if (!permission) {
			throw new BadRequestException('permission not found')
		}
		return permission
	}

	async create(payload: PermissionCreateRequest): Promise<PermissionCreateResponse> {
		await this.check({ ...payload })
		await this.knex('permissions').insert({ ...payload })
		return null
	}

	async check(payload: PermissionCheckRequest): Promise<PermissionCheckResponse> {
		const permission = await this.knex('permissions')
			.select('*')
			.where('url', payload.url)
			.where('role_id', payload.role_id)
			.where('method', payload.method)
			.whereNot('id', payload.id ?? null)
			.first()
		if (permission) {
			throw new BadRequestException('permission already exists')
		}
	}

	async update(params: PermissionFindOneRequest, payload: PermissionUpdateRequest): Promise<PermissionUpdateResponse> {
		const permission = await this.findOne(params)
		await this.check({ id: params.id, url: payload.url ?? permission.url, method: payload.method ?? permission.method, role_id: payload.role_id ?? permission.role_id })
		await this.knex('permissions')
			.where('id', params.id)
			.update({ ...payload })

		return null
	}

	async delete(payload: PermissionDeleteRequest): Promise<PermissionDeleteResponse> {
		await this.findOne(payload)
		await this.knex('permissions').where('id', payload.id).update({ deleted_at: new Date() })
		return null
	}
}
