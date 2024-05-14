import { toString } from "../base";

// Base
/** Check if a value is defined */
export const isDef = <T = unknown>(val?: T): val is T =>
  typeof val !== "undefined";
/** Check if a value is boolean */
export const isBoolean = (val: unknown): val is boolean =>
  typeof val === "boolean";
/** Check if a value is a function */
export const isFunction = <T extends Function>(val: unknown): val is T =>
  typeof val === "function";
/** Check if a value is a number */
export const isNumber = (val: unknown): val is number =>
  typeof val === "number";
/** Check if a value is a string */
export const isString = (val: unknown): val is string =>
  typeof val === "string";
/** Check if a value is a object */
export const isObject = (val: unknown): val is object =>
  toString(val) === "[object Object]";
/** Check if a value is undefined */
export const isUndefined = (val: unknown): val is undefined =>
  toString(val) === "[object Undefined]";
/** Check if a value is null */
export const isNull = (val: unknown): val is null =>
  toString(val) === "[object Null]";
/** Check if a value is regexp */
export const isRegExp = (val: unknown): val is RegExp =>
  toString(val) === "[object RegExp]";
/** Check if a value is date */
export const isDate = (val: unknown): val is Date =>
  toString(val) === "[object Date]";
/** Check if a value is symbol */
export const isSymbol = (val: unknown): val is symbol =>
  typeof val === "symbol";
/** Check if a value is an array */
export const isArray = <T = unknown>(val: unknown): val is T[] =>
  Array.isArray(val);
