import { Games } from "./game";

export interface Player {
    prenom: string;
    dateNaissance: Date;
    games ?: Games;
}