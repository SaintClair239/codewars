// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always has even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22)
// Explanation:
// The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22

function minSum(arr) {
  // your code here
  let result = 0;
  let num = arr.length / 2;
  let numArr = arr.sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (a == b) {
      return 0;
    } else return -1;
  });

  for (let i = 1; i <= num; i++) {
    result += numArr.pop() * numArr.shift();
  }

  return result;
}

minSum([5, 4, 2, 3]);
