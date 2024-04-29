// Reverse String With Stack Function

let data=[];
let dataSize= data.length;

const stackPush=(value)=>{
    data[dataSize]=value;
    dataSize +=1;
}

const stackPop=()=>{
    let lastRemovedItem = data[dataSize-1];
    dataSize-=1;
    data.length=dataSize;
    return lastRemovedItem;
}

const reverseString =(items)=>{
    for(let i =0; i<items.length; i++){
        stackPush(items[i])
    }

    for (let i = 0; i < items.length; i++) {
      items[i]=stackPop();
    }
}

let str="programmes";
str = str.split("");
reverseString(str);

str=str.join("");

console.log(str);