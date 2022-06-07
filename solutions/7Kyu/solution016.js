// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]

function vowelIndices(word) {
  //your code here
  let arr = word.split("");
  let arr2 = [];
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i].toLowerCase() == "a" ||
      arr[i].toLowerCase() == "e" ||
      arr[i].toLowerCase() == "y" ||
      arr[i].toLowerCase() == "i" ||
      arr[i].toLowerCase() == "o" ||
      arr[i].toLowerCase() == "u"
    )
      arr2.push(i + 1);
  }

  return arr2;
}

vowelIndices("orange");
