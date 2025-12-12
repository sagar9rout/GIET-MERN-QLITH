
// parameter
// argument

let arr=[10,20,30,40,50];
console.log(arr[3]);

let arrObj=new Array(5,10,15,20,25);
console.log(arrObj);

console.log(Array(3))
console.log(Array.of(1,2,3,4,5));

console.log(Array())
console.log(Array.of('Tyson','kai','Ray','Max',1,2,10));

console.log(Array.from('Hasta La Vista Baby'));

let num1=[10,20,30,40,50];
num1.push(60,70,90);
console.log(num1);
num1.pop();
console.log(num1);
num1.pop();
console.log(num1);

num1.unshift("Ryuga");
console.log(num1);
num1.shift();
console.log(num1);

console.log(num1.at(30));
console.log(num1.at(-2));
console.log("value",num1.at(2));
console.log("value",num1.indexOf(2));
console.log(num1.includes(20));

console.log(num1.reverse());
console.log(num1.join(""));// .join("-"), by default join with comma

console.log(num1.slice(1,4));//( given index no to "start to end")

console.log(num1)         //num1 60,50,40,30,20,10  -- i provide in splice 2,3 so from index 2 star and from 2nd index 3 elements will be deleted
num1.splice(2,3,100,200,300,"shu kurenai");//( given index no to "start", no of elements to "delete", elements to "add",)
console.log(num1);

// practice

// remove microsoft and add flipkart and amazon
let arr2=["IBM", "Microsoft", "Google", "Apple"];
arr2.splice(1,1,"Flipkart","Amazon");
console.log(arr2);

// sum of two arrays
let arr3=['Tyson','Kai','Ray','Max'];
let arr4=['Beybladee','first','generation'];
let arr5=arr3.concat(arr4);
console.log(arr5);

// sum of all numbers in an array
let num2=[1,2,3,4,5,6,7,8,9,10];
let total=0;
for(let n of num2)
{
    total=total+n;
}
console.log(total);

// find maximum number in an array
let arr6 = [4, 9, 2, 11, 5];
let maximum = arr6[0];
for (let n of arr6) 
{
    if (n > maximum) 
    {
        maximum = n;
    }
}
console.log(maximum);

// count even and odd numbers in an array
let arr7 =[34,9,82,11,45];
let evencount = 0;
let oddcount = 0;
for (let num of arr7) 
{
    if (num%2 == 0)
    {
        evencount++;
    }
    else(num%2 != 0)
    {
        oddcount++;
    }
}
console.log("count of even numbers:", evencount);
console.log("count of odd numbers:", oddcount);

// check if all numbers in an array are positive
let arr8 = [1, 2, 3, 4, 5, 6, 7];
let positive = true;
for (let num of arr8) 
{
    if (num < 0)
    {
        positive=false;
        break;
    }
}
if (positive)
{
    console.log("array is positive");
}
else
{
    console.log("array is negative");
}

// duplicate array elements
let arr9 = [1, 2, 3, 2, 4, 5, 1];
let duplicates = [];
for (let i = 0; i < arr9.length; i++) 
{
    for (let j = i + 1; j < arr9.length; j++) 
    {
        if (arr9[i] === arr9[j] && !duplicates.includes(arr9[i])) 
        {
            duplicates.push(arr9[i]);
        }
    }
}
console.log("Duplicate elements:", duplicates);

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

// double the elements of an array
let arr11 = [1, 2, 3, 4, 5];
let doubled = [];
for (let num of arr11) 
{
    doubled.push(num * 2);
}
console.log("Doubled array:", doubled);

//or
let arr12 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr12.length; i++) 
{
    arr12[i] = arr12[i] * 2;
}
console.log("Doubled array:", arr12);

// find the products of the elements in an array
let arr13 = [1, 2, 3, 4];
let product = 1;
for (let num of arr13) 
{
    product *= num;
}
console.log("Product of elements:", product);

// store different types of string in an array find the word with length>4
let arr14 = ["apple", "bat", "banana", "cat", "elephant"];
let longWords = [];
for (let word of arr14)
{
    if (word.length > 4) 
    {
        longWords.push(word);
    }
}
console.log("Words with length > 4:", longWords);



