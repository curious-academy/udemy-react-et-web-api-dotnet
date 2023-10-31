import { Game } from './game';
import {Player} from './player';

const player: Player = {
    dateNaissance: new Date(),
    prenom: 'Evan'
}

player.games = [];

const game: Game = {
    dateDebut: new Date(),
    etat: 'a démarrer',
    titre: 'Tomb raider'
}
player.games.push(game);