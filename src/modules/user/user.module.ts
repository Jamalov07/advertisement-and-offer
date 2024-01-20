import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { SharedModule } from '../../shared'

@Module({
	imports: [SharedModule],
	controllers: [UserController],
	providers: [UserService],
	exports: [],
})
export class UserModule {}
