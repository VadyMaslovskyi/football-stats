import {players, players_position, teams} from "@prisma/client";

type PlayerPosition = "GK" | "DEF" | "MID" | "FOR"

export class PlayerEntity implements Pick<players, 'firstName' | 'lastName' | 'position'> {
    firstName: string
    lastName: string
    position: players_position
    teams: TeamEntity
}

export class TeamEntity implements Pick<teams, 'name'> {
    name: string
}