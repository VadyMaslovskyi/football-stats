import { Injectable } from '@nestjs/common';
import {DatabaseService} from "./database/database.service";
import {MonthEntity, SeasonEntity, WeekEntity} from "./entities/statisticEntity";

@Injectable()
export class AppService {
  constructor(private readonly databaseService: DatabaseService) {}

  convertResponse<T extends SeasonEntity | WeekEntity | MonthEntity>(response: T[]) {
    return response.map(player => ({
      teamName: player.players.teams.name,
      savesTier2: player.savesTier2,
      lastName: player.players.lastName,
      savesTier1: player.savesTier1,
      subs: player.subs,
      motms: player.motms,
      points: player.points,
      redCards: player.redCards,
      concedes: player.concedes,
      assists: player.assists,
      shotsTier1: player.shotsTier1,
      shotsTier2: player.shotsTier2,
      id: player.playerId,
      starts: player.starts,
      goals: player.goals,
      tacklesTier1: player.tacklesTier1,
      tacklesTier2: player.tacklesTier2,
      ownGoals: player.ownGoals,
      cleansheets: player.cleansheets,
      penSaves: player.penSaves,
      firstName: player.players.firstName,
      penMisses: player.penMisses,
      passesTier1: player.passesTier1,
      position: player.players.position,
      passesTier2: player.passesTier2,
      yellowCards: player.yellowCards
    }));
  }

  async getSeasonsStats() {
    const response = await this.databaseService.seasonPlayers.findMany({
      include: {
        players: {
          select: {
            firstName: true,
            lastName: true,
            position: true,
            teams: {
              select: {
                name: true
              }
            },
          },
        }
      }
    });
    return this.convertResponse(response);
  }

  async getWeeklyStats(weekId: number) {
    const response = await this.databaseService.weekPlayers.findMany({
      where: {
        weekId,
      },
      include: {
        players: {
          select: {
            firstName: true,
            lastName: true,
            position: true,
            teams: {
              select: {
                name: true
              }
            },
          },
        }
      }
    });
    return this.convertResponse(response);
  }

  async getMonthlyStats(monthId: number) {
    const response = await this.databaseService.monthPlayers.findMany({
      where: {
        monthId,
      },
      include: {
        players: {
          select: {
            firstName: true,
            lastName: true,
            position: true,
            teams: {
              select: {
                name: true
              }
            },
          },
        }
      }
    });
    return this.convertResponse(response);
  }
}
