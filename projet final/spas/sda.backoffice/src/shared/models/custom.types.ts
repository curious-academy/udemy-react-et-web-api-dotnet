/**
 * Contract to provide function to get items of T
 */
export type GetAll<T> = () => Promise<T>;

/**
 * Contract to provide function to create one item of T
 */
export type CreateOne<T> = PostOne<T, T>;

/**
 * Contract to provide function to post one item of U 
 */
export type PostOne<U, T> = (item: U) => Promise<T>;

