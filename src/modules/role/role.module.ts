import { Module } from '@nestjs/common'
import { RoleController } from './role.controller'
import { RoleService } from './role.service'
import { SharedModule } from '../../shared'

@Module({
	imports: [SharedModule],
	controllers: [RoleController],
	providers: [RoleService],
	exports: [],
})
export class RoleModule {}
