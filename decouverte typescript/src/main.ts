import {AvecDeplacement, Character} from './character';
import {Deplacement} from './custom-type';

let legolas: AvecDeplacement = new Character('legolas');
let jeMeDeplace: AvecDeplacement = {
    seDeplacer: (location) => {
        console.info(location === 'Comté');
    }
}

//legolas = 1;

// V1
// function faireDeplacer(perso: Character): void {
//     perso.seDeplacer();
// }

// typage dynamique
function faireDeplacer(perso: Deplacement): void {
    perso.seDeplacer('Comté');
}
faireDeplacer(legolas);

let elfe2: Character = {
    role: 'archer',
    nom: 'legolas',
    seDeplacer: () => {
        console.info('je saute d\'arbre en arbre');
    },
    attaquer: () => {}
}
faireDeplacer(elfe2);

let elfe3 = {
    nom: 'legolas',
    tirer: () => {},
    seDeplacer: () => {
        console.info('je saute d\'arbre en arbre');
    }
}
faireDeplacer(elfe3);

const unBonhomme = {
    seDeplacer: () => {
        console.info('toudoudoum');
    }
}
faireDeplacer(unBonhomme);