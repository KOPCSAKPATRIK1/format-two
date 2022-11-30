import { AppService } from './app.service';
import { PhoneDto } from './phone.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): object;
    handleColor(body: PhoneDto): object;
}
