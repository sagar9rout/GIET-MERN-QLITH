console.log("Today we are going to learn functions");

function print(v)
{
    console.log("This is a simple function");
    console.log(v)
}
print("Kai Hiwatari")
print("Tyson")

let str12="hello mf"
let revstr=""
// console.log(str)
for(let idx = str12.length-1;idx>=0;idx--){
    revstr=revstr+str12[idx]
    // console.log(revstr)
}
console.log(revstr)

console.log("Today we are going to learn Function")

function fun(v) {
    console.log("this is function")
    console.log(v)
}
fun(32);
fun(302);

// Function types : 1) Annonimus function :- Which has no name.
// 2)Named function :-Which has name
// 3)Expression Function
// 4)Arrow function -> () => {}
// 5)Higher order function :- A function which is accepting a function as a parameter
// 6)call back function :- If a function is used as a arrgument
// 7)IIF(Imediate Invoking function )


// Named function

function namedFun() {
    console.log("This is named function");
    
}
namedFun();

// Expression Function

let exeFun = function () {
    console.log("This is the expressional function");
}

exeFun();
console.log(exeFun())
console.log(typeof exeFun)

// Arrow function

let arrowFun = () => {
    console.log("This is arrow function");
     
}

arrowFun();


// Higher order function
// let hof = function (func) {
//     console.log(func);
//     func();
// }

// hof(function () {
//     console.log("this is the argument function")
// })

let hof = function () {
    return function () {
        console.log("return fun");
    }
}

let catchedFun = hof();
catchedFun();
// callback function


// Imiediate Invoking function
(function () {
    console.log("this is the IIF");
})()



// String

let str = "this is the string";
console.log(str);
console.log(str[3]);

str = "AMit";
console.log(str);


let str1 = " This is single qouts";
console.log(str1);

let str2 = `Amit`
console.log(str2);


let str3 = new String("AMIT");
console.log(str3.length);
console.log(str3.valueOf());


let testStr = "This is  the  test string";
// String property
console.log(testStr.length)
// String Method
console.log(testStr.toUpperCase())
console.log(testStr.toLowerCase())

console.log(testStr.concat(" Amit"))
console.log(testStr.length)

console.log(testStr.trim().length)
console.log(testStr.length)

// console.log(testStr.trimStart())
// console.log(testStr.trimEnd())

console.log(testStr.replace("t","T"))
console.log(testStr.replaceAll("s", "S"))

console.log(testStr.slice(0,4))
console.log(testStr.slice(-11))



let strin = "String";
let New= "";
for (let i = strin.length - 1; i >= 0; i--){
    
    New=New.concat(strin[i])
}
console.log(New);