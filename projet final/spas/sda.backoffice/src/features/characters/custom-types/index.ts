import { Characters } from "../models";

/**
 * Contract to provides function to get characters
 */
export type GetAllCharacters = () => Promise<Characters>