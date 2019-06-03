import { Controller, Get, Query } from '@nestjs/common';

@Controller('finest/v1')
export class FinestController {
    @Get('/data')
    getCompanyData(@Query('symbol') symbol: string) {
        return `Your company symbol: ${symbol}`;
    }
}
