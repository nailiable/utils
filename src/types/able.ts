export type Promisable<T> = T | Promise<T>;

export type InferPromise<T> = T extends Promise<infer U> ? U : T;

export type Awaitable<T> = T | PromiseLike<T>;

export type Nullable<T> = T | null | undefined;

export type Arrayable<T> = T | T[];
