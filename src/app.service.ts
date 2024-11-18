import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
 
  getHello(): string {
    return 'Welcome to La Cara Cortada API!';
  }
  getVersion(): string {
    return 'API Version: 1.0.0';
  }
}
