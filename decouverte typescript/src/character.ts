export type Localisation = 'Mordor' | 'Comté' | 'ChezLesNains';

export interface AvecDeplacement {
    seDeplacer(localisation: Localisation): void
}

/**
 * Class for all characters in application
 */
export class Character implements AvecDeplacement {
    role: string | null | undefined | string[] | number;

    constructor(public nom: string) {
    }

    /**
     * Allows character to change position
     */
    seDeplacer(localisation: Localisation): void {
        console.info('je me déplace');
    }

    attaquer(): void {
        if (typeof this.role === 'string') {
            console.info(`j\'attaque car j\'ai le rôle ${this.role.toUpperCase()}`);
        }
    }
}