import { describe, it, expect } from "vitest";
import { PasswordValidator } from "../src/PasswordValidator";


describe("PasswordValidator", () => {
  describe("valid passwords", () => {
    it("should validate a strong password", () => {
      expect(PasswordValidator("Str0ngP@ssw0rd!")).toBe(true);
      expect(PasswordValidator("An0ther$trong1")).toBe(true);
      expect(PasswordValidator("P@ssw0rd123!")).toBe(true);
    });

    it("should validate a password with minimum length and required characters", () => {
      expect(PasswordValidator("Abcdef1!")).toBe(true);
    });

    describe("invalid passwords", () => {  
    it("should invalidate a password that is too short", () => {
      expect(PasswordValidator("Ab1!")).toBe(false);
    });

    it("should invalidate a password without uppercase letters", () => {
      expect(PasswordValidator("weakpass1!")).toBe(false); 
    
    });
    it("should invalidate a password without lowercase letters", () => {
      expect(PasswordValidator("WEAKPASS1!")).toBe(false);
    });

    it("should invalidate a password without digits", () => {
      expect(PasswordValidator("WeakPass!")).toBe(false);
    });

    it("should invalidate a password without special characters", () => {
      expect(PasswordValidator("WeakPass1")).toBe(false);
    expect(PasswordValidator("WeakPass123")).toBe(false);
    });
    it("should invalidate a password missing multiple criteria", () => {
      expect(PasswordValidator("weak")).toBe(false);
      expect(PasswordValidator("WEAK")).toBe(false);
      expect(PasswordValidator("12345678")).toBe(false);
      expect(PasswordValidator("Weakpass")).toBe(false);
    });
  });
}); 
});