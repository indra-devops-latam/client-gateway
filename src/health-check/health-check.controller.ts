import { Controller, Get } from '@nestjs/common';

@Controller('/health')
export class HealthCheckController {

  @Get()
  healthCheck() {
    return 'Client Gateway is up and running!!!';
  }

}
