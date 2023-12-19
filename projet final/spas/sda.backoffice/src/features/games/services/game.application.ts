import { GetAllGames } from "../custom-types";
import { Games } from "../models";
import { getAllGamesByApi } from "./game.infrastructure";

/**
 * Gets all characters
 * @param api Api to get raw list of characters
 */
async function getAllGames(api: GetAllGames): Promise<Games> {
    let result = await api();

    result = result.filter(item => item.persoChoisi.surname !== '');

    return result;
}

export function factoryGetAllCharactersBusiness(): Promise<Games> {
    return getAllGames(getAllGamesByApi);
}

const business = {
    getAll: factoryGetAllCharactersBusiness
}

export default business;