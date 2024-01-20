import { Module } from '@nestjs/common'
import { MessageController } from './message.controller'
import { MessageService } from './message.service'
import { SharedModule } from '../../shared'

@Module({
	imports: [SharedModule],
	controllers: [MessageController],
	providers: [MessageService],
	exports: [],
})
export class MessageModule {}
