import { Localisation } from "./character";

/**
 * Objet avec methode de déplacement
 */
export type Deplacement = { 
    vitesse?: number;
    seDeplacer: (localisation: Localisation)=> void 
}