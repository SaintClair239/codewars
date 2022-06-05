// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.
function bingo(a) {
  let [b, i, n, g, o] = [0, 0, 0, 0, 0];
  for (const el of a) {
    if (el == 2) {
      b++;
    } else if (el == 9) {
      i++;
    } else if (el == 14) {
      n++;
    } else if (el == 7) {
      g++;
    } else if (el == 15) {
      o++;
    }
  }
  if (b > 0 && i > 0 && n > 0 && g > 0 && o > 0) return "WIN";

  return "LOSE";
}

bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
