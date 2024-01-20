import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { RoleService } from './role.service'
import { RoleCreateRequestDto, RoleDeleteRequestDto, RoleFindAllRequestDto, RoleFindOneRequestDto, RoleUpdateRequestDto } from './dtos'
import { RoleCreateResponse, RoleDeleteResponse, RoleFindAllResponse, RoleFindOneResponse, RoleUpdateResponse } from './interfaces'

@Controller('role')
export class RoleController {
	constructor(private readonly roleService: RoleService) {
		this.roleService = roleService
	}

	@Get()
	findAll(@Query() payload: RoleFindAllRequestDto): Promise<RoleFindAllResponse> {
		return this.roleService.findAll({ ...payload, pageNumber: payload.pageNumber ?? 1, pageSize: payload.pageSize ?? 10, name: payload.name ?? '' })
	}

	@Get(':id')
	findOne(@Param() payload: RoleFindOneRequestDto): Promise<RoleFindOneResponse> {
		return this.roleService.findOne({ ...payload })
	}

	@Post()
	create(@Body() payload: RoleCreateRequestDto): Promise<RoleCreateResponse> {
		return this.roleService.create({ ...payload })
	}

	@Put(':id')
	update(@Param() params: RoleFindOneRequestDto, @Body() payload: RoleUpdateRequestDto): Promise<RoleUpdateResponse> {
		return this.roleService.update({ ...params }, { ...payload })
	}

	@Delete(':id')
	delete(@Param() params: RoleDeleteRequestDto): Promise<RoleDeleteResponse> {
		return this.roleService.delete({ ...params })
	}
}
