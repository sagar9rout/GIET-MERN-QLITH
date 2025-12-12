
console.log("Special Functions in JavaScript");

//special methods of array
// foreach() iteration [indexing way accessing element in array]

let arr = [10, 20, 30, 40, 50];
arr.forEach((v, i) =>
{
    console.log(i + " ", v);
});

// Map() also  accepting callback function and returns new array
let arr2 = [1, 2, 3, 4, 5];
let arr3 = arr2.map((v) =>
{
    return v * 3;
});
console.log("Mapped Array:", arr3);

//or

let updatearr = arr2.map(v => v + 5);
console.log("Updated Array:", updatearr);

// Filter() creates a new array with all elements that pass the test implemented by the provided function.

let filteredArr = arr2.filter((v) =>
{
    return v % 2 === 0;
});
console.log("Filtered Array:", filteredArr);

//or

let evenArr = arr2.filter(v => v % 2 !== 0);
console.log("Odd Array:", evenArr);

// Reduce() method executes a reducer function on each element of the array, resulting in a single output value.

let sum = arr2.reduce((accumulator, currentValue) =>
{
    return accumulator + currentValue;
});// in this place we can use },0  to set initial value of accumulator as 0
console.log("Sum of Array Elements:", sum);

//or
let product = arr2.reduce((product,v) => 
{
    return product * v;
}, 1);// if we take 0 total product value will be zero
console.log("Product of Array Elements:", product);

//sort() in this a,b wiill be two elements of array and this will update one step by step, & array will be sorted in ascending order
let arr4 = [50, 20, 40, 10, 30];
arr4.sort((a, b) => a - b);
console.log("Sorted Array in Ascending Order:", arr4);
//or descending order
arr4.sort((a, b) => b - a);
console.log("Sorted Array in Descending Order:", arr4);

//some() it tests whether (at least) [one element] in the array passes the test implemented by the provided function. It returns a Boolean value.
let arr5 = [10, 25, 30, 45, 50];
let even = arr5.some((v) => v % 2 === 0);
console.log("Array has at least one even number:", even);

//every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
let arr6 = [2, 4, -6, 8, 10];
let allpositive = arr6.every((v) => 
{return v >= 0});
console.log("all elements are positive numbers:", allpositive);

//Find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
console.log("First element greater than 4:", arr6.find((v) => v > 4));
console.log("First element equal to 2:", arr6.find((v => {return v >= 2})));

//flat() it combine all sub arrays into single array
console.log("Flat Array:", [1,22,8,[1, 2], [3, 4], [5]].flat());
console.log("Flat Array2:", [1, 2, [3, 4, [5, 6]]].flat());// flat method can solve only one level(direct index) at a time but we can provide depth value to solve more levels
// here depth is 2 we can use for more depth[infinity]
console.log("Flat Array with depth:", [1, 2, [3, 4, [5, 6]]].flat(2));
//or
console.log("Flat Array with infinity depth:", [1, 2, [3, 4, [5, 6, [7, 8]]]].flat(Infinity));


// DOM (Document Object Model) manipulation
// document.getElementById("id")
// document.getElementsByClassName("class")
// document.getElementsByTagName("tag")
// document.querySelector("id/class/tag")
// document.querySelectorAll("id/class/tag")

let h1= document.getElementById("heading");// some time broswer show object and some time it show html element
console.log(h1);

let para= document.getElementsByClassName("para");
console.log(para);