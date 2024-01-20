import { Module } from '@nestjs/common'
import { AdCategoryController } from './ad-category.controller'
import { AdCategoryService } from './ad-category.service'
import { SharedModule } from '../../shared'

@Module({
	imports: [SharedModule],
	controllers: [AdCategoryController],
	providers: [AdCategoryService],
	exports: [],
})
export class AdCategoryModule {}
