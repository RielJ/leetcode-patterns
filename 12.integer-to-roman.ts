// @leet start
const VALUES = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const SYMBOLS = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
];

function intToRoman(num: number): string {
  let roman = "";
  for (let i = 0; i < VALUES.length; i++) {
    while (num >= VALUES[i]) {
      roman += SYMBOLS[i];
      num -= VALUES[i];
    }
  }
  return roman;
}

// @leet end
