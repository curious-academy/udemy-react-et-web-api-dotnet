export type EtatPartie = 'a démarrer' | 'en cours' | 'avec success' | 'perdu';

export interface Game {
    titre: string;
    dateDebut: Date;
    dateFin ?: Date;
    etat: EtatPartie
}

export type Games = Game[];