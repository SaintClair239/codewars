// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

// Examples
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"

function remove(string) {
  let result = [];
  let arr = string.split(" ");
  for (const el of arr) {
    let i = 0;
    for (const element of el) {
      if (element == "!") {
        i++;
      }
    }
    if (i !== 1) {
      result.push(el);
    }
  }
  //coding and coding....
  let ans = "";
  for (const el of result) {
    ans = ans + " " + el;
  }
  return ans.trim;
}

remove("Hi! Hi!! Hi!");
