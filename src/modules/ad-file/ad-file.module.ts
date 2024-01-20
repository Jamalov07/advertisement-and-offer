import { Module } from '@nestjs/common'
import { AdFileController } from './ad-file.controller'
import { AdFileService } from './ad-file.service'
import { SharedModule } from '../../shared'

@Module({
	imports: [SharedModule],
	controllers: [AdFileController],
	providers: [AdFileService],
	exports: [],
})
export class AdFileModule {}
