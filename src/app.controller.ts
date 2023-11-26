import { Body, Controller, Get, Post, Param, Req } from '@nestjs/common'
import { AppService } from './app.service'
import { TOriginInfoReturn, THello, TJSONPlaceholderReturn, TTestTimingReturn } from './utils/types'
import { Routes } from './utils/enums'
import { TestTimingDTO } from './utils/dtos'
import { Request } from 'express'

@Controller(Routes.HOME)
export class AppController {
	constructor(
		private readonly appService: AppService,
	) { }

	@Get('healthcheck')
	healthcheck(): THello {
		return this.appService.healthcheck()
	}

	@Post('testTiming')
	async testTiming(@Body() body: TestTimingDTO): Promise<TTestTimingReturn> {
		return this.appService.testTiming(body.timingInMs)
	}

	@Get('JSONPlaceholder')
	async jsonPlaceholder(): Promise<TJSONPlaceholderReturn> {
		return this.appService.jsonPlaceholder()
	}

	@Get('JSONPlaceholder1')
	async jsonPlaceholder1(): Promise<TJSONPlaceholderReturn> {
		return this.appService.jsonPlaceholder1()
	}

	@Get('queryTiming/:timing')
	async queryTiming(@Param('timing') timing: number): Promise<TTestTimingReturn> {
		return this.appService.testTiming(timing)
	}

	@Get('clientOrigin')
	async getClientOrigin(@Req() req: Request): Promise<TOriginInfoReturn> {
		return this.appService.getOriginInfo(req)
	}
}
