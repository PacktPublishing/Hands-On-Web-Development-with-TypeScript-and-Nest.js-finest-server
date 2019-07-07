import { Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from '../../../services/config/config.service';

@Injectable()
export class IexService {
    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
    ) { }

    async getCompanyInfo(symbol: string) {
        const result = await this.httpService
            .get(`https://cloud.iexapis.com/v1/stock/${symbol}/company?token=${this.configService.get('IEX_TOKEN')}`)
            .toPromise()
        return result.data;
    }

    async getCompanyNews(symbol: string) {
        const result = await this.httpService
            .get(`https://cloud.iexapis.com/v1/stock/${symbol}/news/last/last?token=${this.configService.get('IEX_TOKEN')}`)
            .toPromise()
        const news = result.data.map(newsItem => ({
            ...newsItem,
            // convert date
            datetime: new Date(newsItem.datetime).toDateString(),
            // handle missing news image
            ...!newsItem.image && {
                image: 'https://www.google.fr/url?sa=i&source=images&cd=&ved=2ahUKEwi9hqiIrqPjAhWSkxQKHYLACAwQjRx6BAgBEAU&url=https%3A%2F%2Ffr.wikipedia.org%2Fwiki%2FFichier%3ANo_image_available.svg&psig=AOvVaw01Amwg6fOXWHGy1lRkMcsX&ust=1562607844721875'
            }
        }));

        return news;
    }

    async getCompanyStock(symbol: string) {
        const result = await this.httpService
            .get(`https://cloud.iexapis.com/v1/stock/${symbol}/price?token=${this.configService.get('IEX_TOKEN')}`)
            .toPromise()
        return result.data;
    }
}
