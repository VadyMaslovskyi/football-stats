import {BadRequestException, Controller, Get, Param, Query} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('stats/:period')
  async getStats(
      @Param('period') period: string,
      @Query('weekId') weekId: string,
      @Query('monthId') monthId: string
  ) {
    switch (period) {
      case 'week':
        return await this.appService.getWeeklyStats(+weekId)
      case 'month':
        return await this.appService.getMonthlyStats(+monthId)
      case 'season':
        return await this.appService.getSeasonsStats()
      default:
        throw new BadRequestException('Such period doesn\'t exist');
    }
  }
}
