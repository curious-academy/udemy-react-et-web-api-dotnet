import { GetAll } from "../../../shared/models/custom.types";
import { Games } from "../models";

/**
 * Contract to provides function to get games
 */
export type GetAllGames = GetAll<Games>;