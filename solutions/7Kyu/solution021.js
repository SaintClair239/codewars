// Given a number n and two values firstValue and ``econdValue, build an array of size nfilled withfirstValueandsecondValue` alternating.

// for input:                5, true, false
// expected result would be: [true, false, true, false, true]
// Good luck!

function alternate(n, firstValue, secondValue) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      arr.push(firstValue);
    } else {
      arr.push(secondValue);
    }
  }

  return arr;
  // your code
}
