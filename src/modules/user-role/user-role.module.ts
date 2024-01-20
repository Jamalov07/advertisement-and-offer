import { Module } from '@nestjs/common'
import { UserRoleController } from './user-role.controller'
import { UserRoleService } from './user-role.service'
import { SharedModule } from '../../shared'

@Module({
	imports: [SharedModule],
	controllers: [UserRoleController],
	providers: [UserRoleService],
	exports: [],
})
export class UserRoleModule {}
