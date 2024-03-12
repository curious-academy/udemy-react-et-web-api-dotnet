import { CreateOneGame, GetAllGames } from "../custom-types";
import { Game, Games } from "../models";
import { createOneGameByApiGeneric, getAllGamesByApi } from "./game.infrastructure";

/**
 * Gets all characters
 * @param api Api to get raw list of characters
 */
async function getAllGames(api: GetAllGames): Promise<Games> {
    let result = await api();

    result = result.filter(item => item.persoChoisi?.surname !== '');

    return result;
}

async function createOneGame(item: Game, api: CreateOneGame): Promise<Game> {
    return await api(item);
}

export function factoryGetAllGamesBusiness(): Promise<Games> {
    return getAllGames(getAllGamesByApi);
}

export function factoryCreateOneGameBusiness(item: Game): Promise<Game> {
    return createOneGame(item, createOneGameByApiGeneric);
}

const business = {
    getAll: factoryGetAllGamesBusiness,
    createOne: factoryCreateOneGameBusiness
}

export default business;