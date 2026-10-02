// tests/functions.test.js

import {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
} from "../src/functions.js";

test("capitalize first character", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("reverse a string", () => {
    expect(reverseString("hello")).toBe("olleh");
});

test("add two numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
});

test("subtract two numbers", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
});

test("divide two numbers", () => {
    expect(calculator.divide(10, 2)).toBe(5);
});

test("multiply two numbers", () => {
    expect(calculator.multiply(4, 3)).toBe(12);
});

test("caesar cipher shifts letters", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
});

test("caesar cipher wraps from z to a", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("caesar cipher preserves case", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("caesar cipher preserves punctuation", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyze array", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});