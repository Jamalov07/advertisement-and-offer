import { Body, Controller, Delete, Get, Param, Post, Patch, Query } from '@nestjs/common'
import { PermissionService } from './permission.service'
import { PermissionCreateRequestDto, PermissionDeleteRequestDto, PermissionFindAllRequestDto, PermissionFindOneRequestDto, PermissionUpdateRequestDto } from './dtos'
import { PermissionCreateResponse, PermissionDeleteResponse, PermissionFindAllResponse, PermissionFindOneResponse, PermissionUpdateResponse } from './interfaces'

@Controller('permission')
export class PermissionController {
	constructor(private readonly permissionService: PermissionService) {
		this.permissionService = permissionService
	}

	@Get()
	findAll(@Query() payload: PermissionFindAllRequestDto): Promise<PermissionFindAllResponse> {
		return this.permissionService.findAll({
			...payload,
			pageNumber: payload.pageNumber ?? 1,
			pageSize: payload.pageSize ?? 10,
			url: payload.url ?? '',
		})
	}

	@Get(':id')
	findOne(@Param() payload: PermissionFindOneRequestDto): Promise<PermissionFindOneResponse> {
		return this.permissionService.findOne({ ...payload })
	}

	@Post()
	create(@Body() payload: PermissionCreateRequestDto): Promise<PermissionCreateResponse> {
		return this.permissionService.create({ ...payload })
	}

	@Patch(':id')
	update(@Param() params: PermissionFindOneRequestDto, @Body() payload: PermissionUpdateRequestDto): Promise<PermissionUpdateResponse> {
		return this.permissionService.update({ ...params }, { ...payload })
	}

	@Delete(':id')
	delete(@Param() params: PermissionDeleteRequestDto): Promise<PermissionDeleteResponse> {
		return this.permissionService.delete({ ...params })
	}
}
