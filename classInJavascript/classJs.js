/*
    1. class is a programme code template for crating object
    2. Those objects will have some state (variables) & some behavior function inside it 
*/ 

class car {
    start =()=>{
        console.log("This car start");
    }

    stop=()=>{
        console.log("This car is stop");
    }

    setBrand (brand){
        this.brandName=brand;
    }
}

let toyota = new car();
let fortune = new car();
// toyota.start();
toyota.setBrand("Toyota");