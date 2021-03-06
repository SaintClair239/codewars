// You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

// It is guaranteed that a and b are both present in arr.

function consecutive(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (
      arr.findIndex((el) => el === a) + 1 === arr.findIndex((el) => el === b) ||
      arr.findIndex((el) => el === a) - 1 === arr.findIndex((el) => el === b)
    ) {
      return true;
    }
  }
  return false;
  // Your code here...
}
