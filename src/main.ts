import { NestFactory } from '@nestjs/core'
import { App } from './app'
import { INestApplication, ValidationPipe, VersioningType } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { json } from 'express'
import { ConfigService } from '@nestjs/config'
import { AppConfigOptions } from './configs'

setImmediate(async (): Promise<void> => {
	const app = await NestFactory.create<INestApplication>(App, { cors: true })

	app.use(json({ limit: '10mb' }))

	app.enableVersioning({ prefix: 'api/v', type: VersioningType.URI })

	app.useGlobalPipes(new ValidationPipe({ whitelist: true }))

	const swaggerConfig = new DocumentBuilder().build()
	const document = SwaggerModule.createDocument(app, swaggerConfig)
	SwaggerModule.setup('docs', app, document)

	const config: AppConfigOptions = app.get(ConfigService).get('app')

	await app.listen(config.port, config.host).then(() => {
		console.log(`http://${config.host}:${config.port}`)
	})
})
