import {monthPlayers, seasonPlayers, weekPlayers} from "@prisma/client";
import {PlayerEntity} from "./playerEntity";

export class WeekEntity implements Omit<weekPlayers,'playerId'>{
    weekId: number
    points: number
    starts: number
    subs: number
    goals: number
    ownGoals: number
    assists: number
    concedes: number
    cleansheets: number
    redCards: number
    yellowCards: number
    penSaves: number
    penMisses: number
    savesTier1: number
    savesTier2: number
    passesTier1: number
    passesTier2: number
    tacklesTier1: number
    tacklesTier2: number
    shotsTier1: number
    shotsTier2: number
    motms: number
    updated: Date
    added: Date
    playerId: number
    players: PlayerEntity
}

export class MonthEntity implements Omit<monthPlayers, 'added' | 'updated' | 'playerId'>{
    monthId: number
    points: number
    starts: number
    subs: number
    goals: number
    ownGoals: number
    assists: number
    concedes: number
    cleansheets: number
    redCards: number
    yellowCards: number
    penSaves: number
    penMisses: number
    savesTier1: number
    savesTier2: number
    passesTier1: number
    passesTier2: number
    tacklesTier1: number
    tacklesTier2: number
    shotsTier1: number
    shotsTier2: number
    motms: number
    updated: Date
    added: Date
    playerId: number
    players: PlayerEntity
}

export class SeasonEntity implements Omit<seasonPlayers, 'added' | 'updated' | 'playerId'>{
    points: number
    starts: number
    subs: number
    goals: number
    ownGoals: number
    assists: number
    concedes: number
    cleansheets: number
    redCards: number
    yellowCards: number
    penSaves: number
    penMisses: number
    savesTier1: number
    savesTier2: number
    passesTier1: number
    passesTier2: number
    tacklesTier1: number
    tacklesTier2: number
    shotsTier1: number
    shotsTier2: number
    motms: number
    updated: Date
    added: Date
    playerId: number
    players: PlayerEntity
}