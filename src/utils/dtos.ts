import { IsNumber, IsNotEmpty } from 'class-validator'
import { messages } from './messages'

export class TestTimingDTO {
    @IsNotEmpty({ message: messages.PARAM_IS_NOT_EMPTY })
    @IsNumber({}, { message: messages.PARAMS_MUST_BE_NUMBER })
    timingInMs: number
}