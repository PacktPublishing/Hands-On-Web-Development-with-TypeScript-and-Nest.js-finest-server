import { Controller, Get, Query } from '@nestjs/common';
import { IexService } from '../../services/iex/iex.service';

@Controller('finest/v1')
export class FinestController {
    constructor(private readonly iexService: IexService) { }

    @Get('/data')
    async getCompanyData(@Query('symbol') symbol: string) {
        return (await this.iexService.getCompanyData(symbol)).data;
    }
}
