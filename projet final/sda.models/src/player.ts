import { Games } from "./game";

export type Role = {
    label: string
}

export type SuperRole = Role & {
    power: number
}

export interface Person {
    prenom: string;
}

export interface Player extends Person {
    dateNaissance: Date;
    games ?: Games;
    role: SuperRole
}

