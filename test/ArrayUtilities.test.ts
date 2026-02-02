import { describe, it, expect } from "vitest";
import { ArrayUtilities } from "../src/ArrayUtilities";

describe("ArrayUtilities", () => {
  describe("flatten", () => {
    it("should flatten a nested array", () => {
      const nestedArray = [1, [2, [3, 4], 5], 6];
      const nestedArray2 = [[1], 2, 3, [4, 5], 6];
      const flattened = ArrayUtilities.flatten(nestedArray);
      expect(flattened).toEqual([1, 2, 3, 4, 5, 6]);
      expect(ArrayUtilities.flatten(nestedArray2)).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it("should return an empty array when given an empty array", () => {
      const nestedArray: any[] = [];
      const flattened = ArrayUtilities.flatten(nestedArray);
      expect(flattened).toEqual([]);
    });
  });

  describe("unique", () => {
    it("should return unique elements from an array", () => {
      const array = [1, 2, 2, 3, 4, 4, 5];
      const uniqueArray = ArrayUtilities.unique(array);
      expect(uniqueArray).toEqual([1, 2, 3, 4, 5]);
    });

    it("should return an empty array when given an empty array", () => {
      const array: number[] = [];
      const uniqueArray = ArrayUtilities.unique(array);
      expect(uniqueArray).toEqual([]);
    });
  });
  describe("chunk", () => {
    it("should split an array into chunks of specified size", () => {
      const array1 = [1, 2, 3, 4, 5];
      const array2 = [1, 2, 3, 4, 5, 6];
      expect(ArrayUtilities.chunk(array1, 2)).toEqual([[1, 2], [3, 4], [5]]);
      expect(ArrayUtilities.chunk(array2, 3)).toEqual([[1, 2, 3], [4, 5, 6]]);    
    });

    it("should return an empty array when given an empty array", () => {
      const array: number[] = [];
      const chunked = ArrayUtilities.chunk(array, 3);
      expect(chunked).toEqual([]);
    });
  }
)
});

