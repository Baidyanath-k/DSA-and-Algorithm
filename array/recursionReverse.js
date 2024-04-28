// array Reverse with recursion
const myArray = [10, 20, 30, 40, 50, 60];
let temp;
const reverse = (arr, start, end) => {
  console.log(arr);
  if (start <= end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    reverse(arr, start + 1, end - 1);
  }
};

reverse(myArray, 0, myArray.length - 1);


// array reverse with for loop
const data = [10, 20, 30, 40, 50, 60];
let reversedArray = [];

for (let i = data.length-1; i >= 0; i--) {
  reversedArray.push (data[i]);
  console.log(reversedArray);
}
console.log(reversedArray);

// array reverse with ES6 module
let newArray=[50,60,70,80,90,100];
newArray.reverse();
console.log(newArray);

