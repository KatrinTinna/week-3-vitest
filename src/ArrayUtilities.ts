function flatten<T>(arr: unknown[]): T[] {
  return arr.flat(Infinity) as T[];
}

function chunk<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

function unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

export const ArrayUtilities = {
  flatten,
  chunk,
  unique,
};
