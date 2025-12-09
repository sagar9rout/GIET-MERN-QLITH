//scope
// global level if we use(VAR) we can use that variable in the whole file
var i = 10;
console.log(i); // 10
{
    console.log(i); // 10
}



function access() {
    console.log(i); // 10
}

// declartion at block level
{
    var b= 20;
    console.log(b); // 20
}
console.log(b); // 20

function dec() {
    var c = 30;
    console.log(c); // 30
}
// dec();
// console.log(c); // c is not defined

// let key word
// declaration
// global level
let x = 100;
console.log(x); // 100
{
    console.log(x); // 100
}

// block level
{
    let y = 200;
    console.log(y); // 200
// in block level the (y) is finished its scope here after remove from internal memory
}
// console.log(y); // y is not defined

// const key word
const fullname = "Optimus Prime";
console.log(fullname); // Optimus Prime
{
    console.log(fullname); // Optimus Prime
}

// how you declare a variable
// var
var bumblebee; // only declaration
console.log(bumblebee);

var villian = "Megatron"; // declaration + initialization 


// loop
// for loop
for (let i = 0; i <= 5; i++) {
    console.log(i);
}

let idx = 1;
while (idx <= 5) {
    console.log(idx);
    idx++;
}
    console.log(i);

let v=1;
do {
    console.log(v);
    v++;
} while (v <= 5);  

// for (let j = 1; j <= 10; j++)
//     {
//         if (j % 3 === 0)
//      {
//         console.log(j);
//      }
//     } 

let id = 1;
while (id <= 10)
{
    if (id % 2 === 0)
 {
        console.log(id);
    }
    id++;
}


// let user=7;
// let num=prompt("Enter a number:");
// while(num!=user) 
// {
//     console.log("try again");
//     num=prompt("Enter a number:");
//     if(num==user)
//     {
//         console.log("congratulations",num);
//    }
// }


// let your=20;
// let me=prompt("Enter a number:");
// while(me!=your)
// {
//     console.log("try again");
//     me=prompt("Enter a number:");
// }
// console.log("congratulations",me);

// datatypes
// primitive datatypes   
// number,string,boolean,undefined,null,symbol,bigint

// non-primitive datatypes
// object,arrays,functions

console.log(typeof 5); // number
console.log(typeof "Bad-Boy"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof Symbol("id$")); // symbol
console.log(typeof BigInt(9007199254741991)) // bigint in the last it will add n


let obj={
    name:"Optimus Prime",
    age:1000,
}

console.log(obj.name);
console.log(obj["age"]);


//for in
for (let key in obj){
    console.log(obj[key]);
    console.log(key + ":" + obj[key]);
}

// for of      (only use in array and string gives direct value)
let arr=[10,20,30,40,50];
for (let v of arr)
{
    console.log(v);
}