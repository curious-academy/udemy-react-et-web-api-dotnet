function afficherGolum(nomAnneau) {
    this.monAnneau = nomAnneau
    console.info('mon precieux !', this.monAnneau, this);
}

afficherGolum('Sauron');
const afficher = new afficherGolum('Frodon');

function afficherOliphan() {
    this.nbDefenses = 2;
    console.info('oliphan', this);
}

afficherOliphan();
const oliphan = new afficherOliphan();


const oliphanVersGolum = afficherGolum.bind(oliphan);
oliphanVersGolum('sauron #');

afficherGolum.call(oliphan, 'sauron ++');


// ---- Rappels arrow (expression lambda) ----
function afficherSauron(mess) {
    console.info(`${mess} - Sauron`);
}

afficherSauron('golum');

// Première façon
// const uneFonction = mess => {
//     console.info(`${mess} - Sauron`, this);
// }

// 2 ° façon
// const uneFonction = mess => console.info(`${mess.toUpperCase()} - Sauron`, this);

const uneFonction = mess => {
    if (typeof mess === 'string') { // type guard
        console.info(`${mess.toUpperCase()} - Sauron`, this);
    }
};

uneFonction('golum');
uneFonction(1);

// arrow avec return (function arrow)
const calculPrixTTC = (prix) => prix * 1.2;

const calculPrixTTC2 = (prix) => {
    return prix * 1.2;
}

const prixTTC = calculPrixTTC(20);

// ----- arrow et this -----
// const newFonction = new uneFonction('test'); pas faisable, car arrow n'a pas de constructor

function Oliphant() {
    this.nbDefenses = 2;
    console.info('Oliphan', this);

    const barrir = () => {
        console.warn('Barrrirrrrr', this);
    }
    barrir();
}
Oliphant();
const unOliphant = new Oliphant();

// --- async ---
// function afficherVersAsync() {
//     console.info('----');

//     const callbackAExecuterEnAsync = () => {
//         console.info('allumer le feu');
//     };
//     setTimeout(callbackAExecuterEnAsync, 0);
    

//     console.info('****');
// }
// afficherVersAsync();


// ----- Promise -----

const callback = (resolve, reject) => {
    console.info('promise', this);

    const callbackAExecuterEnAsync = () => {
        console.info('allumer le feu');

        // reject();

        const tableau = ['legolas', 'aragorn'];
        resolve(tableau);
    };
    setTimeout(callbackAExecuterEnAsync, 0);
};

// Avec le then()
// const promise = new Promise(callback)
//                 .catch(() => console.info('ERRROR'))
//                 .then(result => console.info(result));

// avec le await
async function executePromesse() {
    const result = await new Promise(callback);
    console.info('result ?', result);

    return result[0];
}
executePromesse().then(result => console.info('???', result));



console.info('FINNNN');




