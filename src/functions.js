// src/functions.js

export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(string) {
    return string.split("").reverse().join("");
}

export const calculator = {
    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    divide(a, b) {
        return a / b;
    },

    multiply(a, b) {
        return a * b;
    }
};

export function caesarCipher(string, shift) {
    return string
        .split("")
        .map((char) => {
            if (char >= "A" && char <= "Z") {
                return String.fromCharCode(
                    ((char.charCodeAt(0) - 65 + shift) % 26) + 65
                );
            }

            if (char >= "a" && char <= "z") {
                return String.fromCharCode(
                    ((char.charCodeAt(0) - 97 + shift) % 26) + 97
                );
            }

            return char;
        })
        .join("");
}

export function analyzeArray(array) {
    const sum = array.reduce((total, number) => total + number, 0);

    return {
        average: sum / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    };
}