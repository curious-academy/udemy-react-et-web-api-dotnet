import { Games } from "../models";

export function getListGame(): Games {
    return [
        { id: 1, persoChoisi: { surname: 'Legolas' }, success: true },
        { id: 2, persoChoisi: { surname: 'Aragorn' }, success: false }
    ]
}