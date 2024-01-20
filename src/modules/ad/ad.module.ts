import { Module } from '@nestjs/common'
import { AdController } from './ad.controller'
import { AdService } from './ad.service'
import { SharedModule } from '../../shared'

@Module({
	imports: [SharedModule],
	controllers: [AdController],
	providers: [AdService],
	exports: [],
})
export class AdModule {}
