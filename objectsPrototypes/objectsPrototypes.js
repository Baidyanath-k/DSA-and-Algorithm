// Object is an entity having state and behavior (properties or Method)
// Object have a special property called prototype.

/*
    1. We can set prototype using  __proto__
    2. If Object and Method have same method, Object's Method will be used. 
*/ 

/*
    1. Javascript object create an automated special object name "prototype",
    2. Javascript array is typeOf an object; 
*/

const student ={
    fullName:"Akib",
    marks:90,
    printMarks: function()
    {
        console.log("Marks", this.marks); // "this.marks" means "student.marks";
    }
};

const employeeOne={
    fullName:"Akondo",
    salary: 20000,
    calcTax(){
        console.log("Tax rate is 10%");
    }

};

const employeeTwo = {
    fullName:"Sumitra",
    salary:25000,
};
employeeTwo.__proto__=employeeOne;
employeeTwo.calcTax();

