import { Module } from '@nestjs/common'
import { MessageFileController } from './message-file.controller'
import { MessageFileService } from './message-file.service'
import { SharedModule } from '../../shared'

@Module({
	imports: [SharedModule],
	controllers: [MessageFileController],
	providers: [MessageFileService],
	exports: [],
})
export class MessageFileModule {}
