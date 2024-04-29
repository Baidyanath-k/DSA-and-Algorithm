// Queue Data Structure

// ***** Queue is Linear Data Structure
// *****  First In, First Out (FIFO)

/*
    [20, 30, 40, 50, 60, 70];
    Here, First In 20, so First Out 20;
*/

/* 
Operations: Queues typically support two primary operations:
    1. Enqueue: Adds an element to the back of the queue.
    2. Dequeue: Removes the element at the First In of the queue.
*/



let queueData = [];
let currentSize = queueData.length;
let maxSize = 5;

const enqueue = (value) => {
  if (currentSize >= maxSize) {
    console.log("Queue is full, Do not entry", value);
  } else {
    queueData[currentSize] = value;
    currentSize += 1;
  }
};

const dequeue = () => {
    if (currentSize>0) {
        for (let i = 0; i < queueData.length; i++) {
          queueData[i] = queueData[i + 1];
        }
        currentSize -= 1;
        queueData.length = currentSize;
    }else{
        console.log("Queue is empty");
    }
  
};

enqueue(20);
enqueue(30);
enqueue(40);
enqueue(50);
enqueue(60);
dequeue();
enqueue(70);
dequeue();
dequeue();
dequeue();
dequeue();
dequeue();
dequeue();



console.log(queueData); 
