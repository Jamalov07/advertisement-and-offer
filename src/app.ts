import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { appConfig } from './configs'
import { AdCategoryModule, AdFileModule, AdModule, MessageFileModule, MessageModule, OfferModule, PermissionModule, RoleModule, UserModule, UserRoleModule } from './modules'
import { SharedModule } from './shared'

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true, load: [appConfig] }),
		SharedModule,
		AdModule,
		AdCategoryModule,
		AdFileModule,
		MessageModule,
		MessageFileModule,
		OfferModule,
		PermissionModule,
		RoleModule,
		UserModule,
		UserRoleModule,
	],
	controllers: [],
	providers: [],
})
export class App {}
