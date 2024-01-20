import { registerAs } from '@nestjs/config'

export interface AppConfigOptions {
	host: string
	port: number
}

export const appConfig = registerAs<AppConfigOptions>('app', () => ({
	host: process.env.APP_HORT ?? '127.0.0.1',
	port: process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 3000,
}))
