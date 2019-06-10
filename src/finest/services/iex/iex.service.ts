import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class IexService {
    constructor(private readonly httpService: HttpService) { }

    getCompanyData(symbol: string) {
        return this.httpService.get(`https://api.iextrading.com/1.0/stock/${symbol}/company`).toPromise();
    }
}
