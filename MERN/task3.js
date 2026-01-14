//print each number multiplied by 2 using forEach
let num = [1, 2, 3, 4];
num.forEach(num => {
  console.log(num * 2);
});

//calculate the sum of all elements
let numbers = [10, 20, 30];
let sum = 0;
numbers.forEach(num => {
  sum += num;
});
console.log(sum);

//an array of objects
let users = [{ name: "A", age: 21 },{ name: "B", age: 25 },{ name: "C", age: 19 }];
users.forEach(user => {
  console.log(user.name);
});

//Count how many numbers are even using forEach
let arr = [1, 2, 3, 4, 6];
let count = 0;
arr.forEach(num => {
  if (num % 2 === 0) 
    {
        count++;
    }
});
console.log(count);

//Convert an array of numbers into an array of their squares using map
let nums = [1, 2, 3, 4];
let squares = nums.map(num => num * num);
console.log(squares);

//From an array of strings, return an array of string lengths using map
let strings = ["tyson","kai","max","ray"];
let lengths = strings.map(str => str.length);
console.log(lengths);

//From an array of user objects, return only ages
let user = [{ name: "A", age: 21 },{ name: "B", age: 25 },{ name: "C", age: 19 }];
let ages = users.map(user => user.age);
console.log(ages);

//Add tax: 10% to each product object using map
let products = [{ name: "Product1", price: 100 },{ name: "Product2", price: 200 }];
let productsTax = products.map(product => {
  return { name: product.name, price: product.price * 1.1 };
});
console.log(productsTax);

//From an array return only even numbers using filter
let num1 = [1, 2, 3, 4, 6];
let even = num1.filter(num => num % 2 === 0);
console.log(even);

// Filter out strings with length ≤ 3
let words = ["you", "had", "me", "at", "hello."];
let result = words.filter(word => word.length > 3);
console.log(result);
// From a list of students, return students with marks ≥ 50.
let students = [
  {name:"A", marks:80},
  {name:"B", marks:30},
  {name:"C", marks:50}
];
let passed = students.filter(s => s.marks >= 50);
console.log(passed);

// an array of products, return only those that are in stock
let items = [
  {name:"item1", inStock:true},
  {name:"item2", inStock:false},
];
let available = items.filter(item => item.inStock);
console.log(available);

// Find the total sum of numbers using reduce
let arr1 = [1, 2, 3, 4, 5];
let total = arr1.reduce((acc, num) => acc + num, 0);
console.log(total);

// Count how many odd numbers are in array using reduce
let arr2 = [1, 2, 3, 4, 5];
let counts = arr2.reduce((c, num) => {
  if (num % 2 !== 0) c++;
  return c;
}, 0); 
console.log(counts);

// Convert array of numbers to object showing frequency
let arr3 = [1, 2, 2, 3, 1];
let freq = arr.reduce((obj, num) => {
  obj[num] = (obj[num] || 0) + 1;
  return obj;
}, {});
console.log(freq);

// Find the maximum number using reduce
let num3 = [10, 5, 30, 20];
let max = num3.reduce((a, b) => a > b ? a : b);
console.log(max);

// Check if array contains any number greater than 50.
let num4 = [10, 20, 60];
console.log(num4.some(num => num > 50));

// Check if any product in list has price > 1000.
let products1 = [
  {name:"prod1", price:500},
  {name:"prod2", price:1500},
];
console.log(products1.some(product => product.price > 1000));

// Check if any student has failed (marks < 35).
let students1 = [
  {name:"A", marks:40},
  {name:"B", marks:30},
];
console.log(students1.some(s => s.marks < 35));

// Check if all elements of array are positive integers.
let arr4 = [1, 2, 3, 4];
console.log(arr4.every(num => num > 0));

// Check if all names in an array are strings.
let names = ["ledownski", "ronaldo", "messi"];
console.log(names.every(name => typeof name === "string"));

// Check if all users are adults (age ≥ 18).
let user1 = [
  {name:"A", age:20},
  {name:"B", age:25}
];
console.log(user1.every(u => u.age >= 18));

// Find the first even number in array.
let arr5 = [1, 3, 4, 6];
console.log(arr5.find(num => num % 2 === 0));

// Find first student who scored more than 90.
let stu = [
  {name:"A", marks:85},
  {name:"B", marks:95}
];
console.log(stu.find(s => s.marks > 90));

// Find the product whose id is 5
let products2 = [
  {id:1, name:"prod1"},
  {id:5, name:"prod5"},
];
console.log(products2.find(p => p.id === 5));

// Find the first string with length > 5.
let strings1 = ["superman", "Batman", "flash", "aquaman"];
console.log(strings1.find(str => str.length > 5));