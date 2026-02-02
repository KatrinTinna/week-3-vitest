import { describe, it, expect } from "vitest";
import { FizzBuzz } from "../src/FizzBuzz";
describe("fizzBuzz", () => {
  it("should return the number as string for non-multiples", () => {
    expect(FizzBuzz(1)).toBe("1");
    expect(FizzBuzz(2)).toBe("2");
    expect(FizzBuzz(4)).toBe("4");
  });

    it("should return 'Fizz' for multiples of 3", () => {
      expect(FizzBuzz(3)).toBe("Fizz");
      expect(FizzBuzz(6)).toBe("Fizz");
    });
    it("should return 'Buzz' for multiples of 5", () => {
      expect(FizzBuzz(5)).toBe("Buzz");
      expect(FizzBuzz(10)).toBe("Buzz");
    });
    it("should return 'FizzBuzz' for multiples of both 3 and 5", () => {
      expect(FizzBuzz(15)).toBe("FizzBuzz");
      expect(FizzBuzz(30)).toBe("FizzBuzz");
    });
    it("should handle zero correctly", () => {
      expect(FizzBuzz(0)).toBe("FizzBuzz");
    });
});