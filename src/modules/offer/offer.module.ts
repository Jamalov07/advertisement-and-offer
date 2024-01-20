import { Module } from '@nestjs/common'
import { OfferController } from './offer.controller'
import { OfferService } from './offer.service'
import { SharedModule } from '../../shared'

@Module({
	imports: [SharedModule],
	controllers: [OfferController],
	providers: [OfferService],
	exports: [],
})
export class OfferModule {}
