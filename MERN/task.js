
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

str="hello mf"
let revstr=""
console.log(str)
for(let idx = str.length-1;idx>=0;idx--){
    revstr+str[idx]
    console.log(revstr)
}