import { Body, Controller, Delete, Get, Param, Post, Patch, Query } from '@nestjs/common'
import { UserService } from './user.service'
import { UserCreateRequestDto, UserDeleteRequestDto, UserFindAllRequestDto, UserFindOneRequestDto, UserUpdateRequestDto } from './dtos'
import { UserCreateResponse, UserDeleteResponse, UserFindAllResponse, UserFindOneResponse, UserUpdateResponse } from './interfaces'

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {
		this.userService = userService
	}

	@Get()
	findAll(@Query() payload: UserFindAllRequestDto): Promise<UserFindAllResponse> {
		return this.userService.findAll({
			...payload,
			pageNumber: payload.pageNumber ?? 1,
			pageSize: payload.pageSize ?? 10,
			email: payload.email ?? '',
			full_name: payload.full_name ?? '',
		})
	}

	@Get(':id')
	findOne(@Param() payload: UserFindOneRequestDto): Promise<UserFindOneResponse> {
		return this.userService.findOne({ ...payload })
	}

	@Post()
	create(@Body() payload: UserCreateRequestDto): Promise<UserCreateResponse> {
		return this.userService.create({ ...payload })
	}

	@Patch(':id')
	update(@Param() params: UserFindOneRequestDto, @Body() payload: UserUpdateRequestDto): Promise<UserUpdateResponse> {
		return this.userService.update({ ...params }, { ...payload })
	}

	@Delete(':id')
	delete(@Param() params: UserDeleteRequestDto): Promise<UserDeleteResponse> {
		return this.userService.delete({ ...params })
	}
}
