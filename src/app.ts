import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { appConfig } from './configs'
import { RoleModule, UserModule } from './modules'
import { SharedModule } from './shared'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [appConfig],
		}),
		SharedModule,
		RoleModule,
		UserModule,
	],
	controllers: [],
	providers: [],
})
export class App {}
