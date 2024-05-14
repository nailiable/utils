export type Class<T = unknown> = new (...args: unknown[]) => T;
export type AbstractClass<T = unknown> = abstract new (...args: unknown[]) => T;
export type Constructor<T = unknown> = Class<T> | AbstractClass<T>;
