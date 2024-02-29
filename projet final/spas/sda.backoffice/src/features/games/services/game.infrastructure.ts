import handler from "../../../core/infrastructures/https/http-handler";
import { Games } from "../models";

// TODO: ALERT, delete from code !!!
const url = 'api/game';

type GameApiReturnType = {
    id: number,
    beginDate: Date,
    endDate?: Date,
    character: string,
    success: boolean
}

type ApiReturnType = GameApiReturnType[];

/**
 * Return list of characters from api
 */
async function getRawApi(): Promise<ApiReturnType> {
    const response = await handler.get<ApiReturnType>(url);
    return response.data;
}

async function getAllGamesByApiGeneric(rawApi: () => Promise<ApiReturnType>): Promise<Games> {
    const resultApi = await rawApi();

    return resultApi.map(gameApi => ({
        id: gameApi.id,
        persoChoisi: { surname: gameApi.character },
        success: gameApi.success
    }));
}

export async function getAllGamesByApi(): Promise<Games> {
    return getAllGamesByApiGeneric(getRawApi);
}