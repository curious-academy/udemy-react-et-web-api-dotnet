/**
 * Class for all characters in application
 */
export class Character {
    constructor(public nom: string) {
    }

    /**
     * Allows character to change position
     */
    seDeplacer(): void {
        console.info('je me déplace');
    }
}