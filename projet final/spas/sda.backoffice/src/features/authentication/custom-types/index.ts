import { PostOne } from "../../../shared/models/custom.types";
import { AuthenticationUser, LoginUser } from "../models";

export type PostOneUser = PostOne<LoginUser, AuthenticationUser>;