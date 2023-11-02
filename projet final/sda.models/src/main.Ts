import { Game } from './game';
import {Player} from './player';

const player: Player = {
    dateNaissance: new Date(),
    prenom: 'Evan',
    role: {
        label: 'magicien',
        power: 100
    }
}

player.games = [];

const game: Game = {
    dateDebut: new Date(),
    etat: 'a démarrer',
    titre: 'Tomb raider'
}
player.games.push(game);

// ------------------------------------------

let aragorn: any = 'Personnage';
aragorn = {
    name: 'aragorn'
}

function hasProp<K extends PropertyKey>(obj: unknown, key: K | null | undefined): obj is Record<K, unknown> {
    return key != null && obj != null && typeof obj === 'object' && key in obj;
}

function affichagePersoAvecUnName(perso: unknown): void {
    if (typeof perso === 'string') {
        console.info(perso.toLowerCase());  
    }
    if (hasProp(perso, 'name')) {
        console.info(perso.name);
    }
}
affichagePersoAvecUnName(aragorn);
affichagePersoAvecUnName('test');