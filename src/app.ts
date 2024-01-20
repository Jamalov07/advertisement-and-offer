import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { appConfig } from './configs'
import { AdCategoryModule, AdFileModule, AdModule, OfferModule, PermissionModule, RoleModule, UserModule } from './modules'
import { SharedModule } from './shared'

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true, load: [appConfig] }),
		SharedModule,
		RoleModule,
		UserModule,
		AdModule,
		PermissionModule,
		AdCategoryModule,
		AdFileModule,
		OfferModule,
	],
	controllers: [],
	providers: [],
})
export class App {}
