
// print only odd numbers
let arr=[1,2,3,4,5,6,7,8,9,10];
for (let num of arr) 
{
    if (num % 2 != 0) 
    {
        console.log(num);
    }
}

// count positive numbers
let arr2 = [-1, 2, -3, 4, 5, -6, 7];
let count = 0;
for (let num of arr2) 
{
    if (num > 0)
    {
        count++;
    }
}
console.log("Count of positive numbers:", count); 

// reverse an array
let arr3 = [1, 2, 3, 4, 5];
let rev = arr3.reverse();
console.log(rev);

// reverse an array using loop
let arr4 = [1, 2, 3, 4];
let rev2 = [];
for (let i = arr4.length - 1; i >= 0; i--) 
{
    rev2.push(arr4[i]);
}
console.log(rev2);

//print factorial of a number
let n = 5;
let fact = 1;
for (let i = 1; i <= n; i++) 
{
    fact *= i;
}
console.log(fact);

// count vowels in a string
let word1= "punisher";
let vowels = ['p','u','n','i','s','h','e','r'];
let count1 = 0;
for (let ch of word1) 
{ 
    for (let v of vowels) 
    {
        if (ch === v) 
        {
            count1++;
            break;
        }
    }
}
console.log(count1);

// find largest number in an array
let arr5 = [4, 9, 2, 11, 5];
let largest = arr5[0];
for (let n of arr5) 
{
    if (n > largest) 
    {
        largest = n;
    }
}
console.log(largest);


// find duplicate element and remove duplicates
let arr10 = [1, 2, 3, 4, 5,5,3];
let duplicate=[];
for(let num of arr10)
{
    if(!duplicate.includes(num))
    {
        duplicate.push(num);
    }
}
console.log("new array:", duplicate);

// print the star pattern
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars = stars + "*";
    }
    console.log(stars);
}

// check if an umber is a prime 
let num = 7;
let isPrime = true;
if (num <= 1)
    {
    isPrime = false;
} else 
{
    for (let i = 2; i < num; i++) 
    {
        if (num % i === 0)
        {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log("Prime number");
} else {
    console.log("Not a prime number");
}

// or
let num5 = Number(prompt("Enter a number:"));
let isPrime1 = true;
if (num5 <= 1) {
    isPrime1 = false;
} else {
    for (let i = 2; i < num5; i++) {
        if (num5 % i === 0) {
            isPrime1 = false;
            break;
        }
    }
}

if (isPrime1) {
    console.log("Prime number");
} else {
    console.log("Not a prime number");
}

// fibonacci series
let value = 5;
let a = 0;
let b = 1;

console.log("Fibonacci Series:");

for (let i = 1; i <= n; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}

// or
let n1 = Number(prompt("Enter number of terms:"));
let a1 = 0;
let b1 = 1;
console.log("Fibonacci Series:");
for (let i = 1; i <= n; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}

