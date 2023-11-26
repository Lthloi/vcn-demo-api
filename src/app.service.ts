import { Injectable } from '@nestjs/common'
import { TOriginInfoReturn, THello, TJSONPlaceholder, TJSONPlaceholderReturn, TTestTimingReturn } from './utils/types'
import { formatTestTimingReturn } from './utils/helpers'
import axios from 'axios'
import { json_placeholder_api, json_placeholder_api_1 } from './utils/apis'
import { Request } from 'express'

@Injectable()
export class AppService {
	healthcheck(): THello {
		return {
			healthcheck: 'Healthcheck from vcn-demo-api server!!!',
		}
	}

	async testTiming(time_to_wait_in_ms: number): Promise<TTestTimingReturn> {
		await new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(true)
			}, time_to_wait_in_ms)
		})

		return {
			testTimingMsg: formatTestTimingReturn(time_to_wait_in_ms),
		}
	}

	async jsonPlaceholder(): Promise<TJSONPlaceholderReturn> {
		const { data } = await axios.get<TJSONPlaceholder[]>(json_placeholder_api)

		return {
			apiToCall: json_placeholder_api,
			data: data,
		}
	}

	async jsonPlaceholder1(): Promise<TJSONPlaceholderReturn> {
		const { data } = await axios.get<TJSONPlaceholder>(json_placeholder_api_1)

		return {
			apiToCall: json_placeholder_api_1,
			data: [
				data
			],
		}
	}

	async getOriginInfo(req: Request): Promise<TOriginInfoReturn> {
		return {
			server_host: req.get('host'),
			client_origin: req.get('origin'),
		}
	}
}
