let data = [
  10, 20, 30, 40, 50, 60, 70, 80, 90, 2, 8, 9, 11, 25, 82, 98, 12, 55,
];
let find = 55;
let position = undefined;

for (let i = 0; i <= data.length; i++) {
  if (data[i] === find) {
    position = i;
    break;
  }
}

if (!position) {
  console.log("Data position do not found");
} else {
  console.log(position);
}
