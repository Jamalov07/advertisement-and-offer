import { Body, Controller, Delete, Get, Param, Post, Patch, Query } from '@nestjs/common'
import { UserRoleService } from './user-role.service'
import { UserRoleCreateRequestDto, UserRoleDeleteRequestDto, UserRoleFindAllRequestDto, UserRoleFindOneRequestDto, UserRoleUpdateRequestDto } from './dtos'
import { UserRoleCreateResponse, UserRoleDeleteResponse, UserRoleFindAllResponse, UserRoleFindOneResponse, UserRoleUpdateResponse } from './interfaces'

@Controller('user-role')
export class UserRoleController {
	constructor(private readonly userRoleService: UserRoleService) {
		this.userRoleService = userRoleService
	}

	@Get()
	findAll(@Query() payload: UserRoleFindAllRequestDto): Promise<UserRoleFindAllResponse> {
		return this.userRoleService.findAll({ ...payload, pageNumber: payload.pageNumber ?? 1, pageSize: payload.pageSize ?? 10 })
	}

	@Get(':id')
	findOne(@Param() payload: UserRoleFindOneRequestDto): Promise<UserRoleFindOneResponse> {
		return this.userRoleService.findOne({ ...payload })
	}

	@Post()
	create(@Body() payload: UserRoleCreateRequestDto): Promise<UserRoleCreateResponse> {
		return this.userRoleService.create({ ...payload })
	}

	@Patch(':id')
	update(@Param() params: UserRoleFindOneRequestDto, @Body() payload: UserRoleUpdateRequestDto): Promise<UserRoleUpdateResponse> {
		return this.userRoleService.update({ ...params }, { ...payload })
	}

	@Delete(':id')
	delete(@Param() params: UserRoleDeleteRequestDto): Promise<UserRoleDeleteResponse> {
		return this.userRoleService.delete({ ...params })
	}
}
