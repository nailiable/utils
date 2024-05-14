export type Class<T = unknown> = new (...args: unknown[]) => T;
export type Classable<T = unknown> = Class<T> | T;
export type AbstractClass<T = unknown> = abstract new (...args: unknown[]) => T;
export type AbstractClassable<T = unknown> = AbstractClass<T> | T;
export type Constructor<T = unknown> = Class<T> | AbstractClass<T>;
export type Constructorable<T = unknown> = Constructor<T> | T;
