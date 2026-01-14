//Palindrome String

let str = prompt("Enter a string:");
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
}

if (str === reversed) {
    console.log("Palindrome string");
} else {
    console.log("Not a palindrome string");
}

//Capitalize the first letter of each word

let sentence = prompt("Enter a sentence:");
let words = sentence.split(" ");
let result = "";

for (let i = 0; i < words.length; i++) {
    result = result + words[i][0].toUpperCase() + words[i].slice(1) + " ";
}

console.log(result);

//takes a string and returns its length

function getLength(str) {
    return str.length;
}

let input = prompt("Enter a string:");
console.log(getLength(input));

//Convert a string to uppercase without using .toUpperCase()

//Count the number of vowels in a string

let str1 = prompt("Enter a string:");
let count = 0;

for (let i = 0; i < str1.length; i++) {
    let ch = str1[i].toLowerCase();
    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
        count++;
    }
}

console.log("Number of vowels:", count);

//arrow function that multiplies two numbers

const multiply = (a, b) => a * b;

console.log(multiply(4, 5));
