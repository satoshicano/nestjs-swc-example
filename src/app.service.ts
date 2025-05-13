import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name, { timestamp: true });

  getHello(): string {
    this.logger.log('Getting Hello World!');
    return 'Hello World!';
  }
}
