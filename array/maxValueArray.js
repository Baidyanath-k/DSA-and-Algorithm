// find Max value in array


// array of Numbers
let data = [40, 50, 60, 80, 20, 7, 100, 90, 800];
let max = data[0];

for (let i = 1; i < data.length; i++) {
  if (data[i] > max) {
    max = data[i];
  }
}
console.log(max);

// array of Strings
let strings = ["banana", "apple", "orange", "grape", "kiwi"];
let maxString = strings[0];

for (let j = 1; j < strings.length; j++) {
  if (strings[j] > maxString) {
    maxString = strings[j];
  }
}
console.log(maxString);