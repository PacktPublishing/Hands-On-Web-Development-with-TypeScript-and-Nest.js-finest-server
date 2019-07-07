import { Controller, Get, Query } from '@nestjs/common';
import { IexService } from '../../services/iex/iex.service';

@Controller('finest/v1')
export class FinestController {
    constructor(private readonly iexService: IexService) { }

    @Get('/info')
    async getCompanyInfo(@Query('symbol') symbol: string) {
        return await this.iexService.getCompanyInfo(symbol);
    }

    @Get('/news')
    async getCompanyNews(@Query('symbol') symbol: string) {
        return await this.iexService.getCompanyNews(symbol);
    }

    @Get('/stock')
    async getCompanyStock(@Query('symbol') symbol: string) {
        return await this.iexService.getCompanyStock(symbol);
    }
}
