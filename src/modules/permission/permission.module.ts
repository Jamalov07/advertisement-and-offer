import { Module } from '@nestjs/common'
import { PermissionController } from './permission.controller'
import { PermissionService } from './permission.service'
import { SharedModule } from '../../shared'

@Module({
	imports: [SharedModule],
	controllers: [PermissionController],
	providers: [PermissionService],
	exports: [],
})
export class PermissionModule {}
