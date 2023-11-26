import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common/pipes'
import { PORT } from './utils/env'
import { NestExpressApplication } from '@nestjs/platform-express'

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule)

	app.enableCors({
		origin: "*",
		credentials: true,
	})

	app.setGlobalPrefix('api')

	app.useGlobalPipes(new ValidationPipe({ transform: true }))

	await app.listen(PORT, () => {
		console.log('>>> Server is working on port ' + PORT)
	})
}
bootstrap()
