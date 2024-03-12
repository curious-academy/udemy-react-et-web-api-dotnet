import { CreateOne, GetAll } from "../../../shared/models/custom.types";
import { Game, Games } from "../models";

/**
 * Contract to provides function to get games
 */
export type GetAllGames = GetAll<Games>;

/**
 * Contract to provides function to create game
 */
export type CreateOneGame = CreateOne<Game>;
