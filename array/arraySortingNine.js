// array bubble sort (9)
// bubble sort = (size*size) loop
// (small) => big;

let data = [40, 60, 50, 100, 80, 90];

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data.length; j++) {
    if (data[j] > data[j + 1]) {
      let temp = data[j];
      data[j+1] = data[j];
      data[j + 1] = temp;
    }
  }
}
console.log(data);

let strings = ["banana", "apple", "orange", "grape", "kiwi"];

for (let i = 0; i < strings.length; i++) {
  for (let j = 0; j < strings.length; j++) {
    if (strings[j] > strings[j + 1]) {
      let temp = strings[j];
      strings[j] = strings[j + 1];
      strings[j+1] = temp;
    }
  }
}
console.log(strings);
