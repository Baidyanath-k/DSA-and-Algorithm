//**  stack is linear data structure
//**  element fixed
//**  Last In, Fast Out (LIFO)
//**  Operations ==> Push, Pop, Peek(Or top), isEmpty, Size

// Stack Push

let array = [];
let arrayCurrentSize = array.length;
let maxSize = 6;

const stackPush = (pushValue) => {
  if (arrayCurrentSize >= maxSize) {
    console.log("Stack is full, you can not add", pushValue);
  } else {
    array[arrayCurrentSize] = pushValue;
    arrayCurrentSize += 1;
  }
};

// Stack POP

const stackPop = () => {
  if (arrayCurrentSize > 0) {
    arrayCurrentSize -= 1;
    array.length = arrayCurrentSize;
  }
};

stackPush(10);
stackPush(40);
stackPush(30);
stackPush(35);
stackPush(9);
stackPush(15);
stackPop();
console.log(array);

// array sorting practice
// small=>big

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[j] > array[j + 1]) {
      let temp = array[j];
      array[j] = array[j+1];
      array[j + 1] = temp;
    }
  }
}

console.log("Sorting", array);
