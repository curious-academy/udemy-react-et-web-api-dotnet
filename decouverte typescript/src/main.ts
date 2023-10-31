import {Character} from './character';

let legolas = new Character('legolas');

//legolas = 1;

// V1
// function faireDeplacer(perso: Character): void {
//     perso.seDeplacer();
// }

// typage dynamique
function faireDeplacer(perso: { seDeplacer: ()=>void }): void {
    perso.seDeplacer();
}
faireDeplacer(legolas);

let elfe2: Character = {
    nom: 'legolas',
    seDeplacer: () => {
        console.info('je saute d\'arbre en arbre');
    }
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