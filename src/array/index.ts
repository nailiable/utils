export function uniqueArray<IArray extends unknown[]>(
  inputArray: IArray
): IArray {
  return Array.from(new Set(inputArray)) as IArray;
}
