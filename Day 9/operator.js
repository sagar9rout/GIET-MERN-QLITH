console.log("This is the End");
// Arithmetic operator
console.log(2+3); // Addition
console.log(5-2); // Subtraction
console.log(4*3); // Multiplication
console.log(8/2); // Division
console.log(7%3); // Modulus    
console.log(2**3); // Exponentiation

// Incement and Decrement operator(only one can is increment & decrement)
// Increment 
    //  post increment
    // pre incerement

    
// Decrement
       // post decrement    
       // pre decrement

a=10;
console.log(++a); // pre increment    
console.log(a);
b=10;
console.log(b++); // post increment
console.log(b);

c=30;
console.log(--c); // pre decrement
console.log(c);
d=30;
console.log(d--); // post decrement
console.log(d);

// Assignment operator
x=10;
x+=5; // x=x+5
console.log(x);
y=20;
y-=5; // y=y-5
console.log(y);
z=15;
z*=2; // z=z*2
console.log(z);
m=40;
m/=4; // m=m/4
console.log(m);
n=25;
n%=4; // n=n%4
console.log(n);
p=3;
p**=3;
console.log(p); // p=p**3 (3^3=27)

// Comparison operator
console.log(3>2);
console.log(2<3);
console.log(3>=2);
console.log(2<=3);
console.log(5==5);
console.log(5=="5");
console.log(5=="abc");
console.log(5===5);  // first check type
console.log(5==="5");
console.log(5==="abc");
console.log(5!=5);  // first check value
console.log(5!="5");
console.log(5!==5); // first check type
console.log(5!=="5");


// Logical operator
console.log(2<3 && 4>3);
console.log(2<3 || 4<3);

c=2;
console.log(2>3 && c++>3);
console.log(c);  //maintain the value of c because first condition is false important

c=2;
console.log(2<3 && ++c>3);
console.log(c); // increment because first condition is true

console.log(!true);
console.log(!false);

console.log(2&&3); // return last if first value is true  (false && "it is true") return false
console.log(2||3); // return first true value
console.log(3&& 2); // return last if first value is true
console.log("ssr" && 3); // return last if first value is true

// string concatenation
console.log("Hello " + "World");
console.log("Hello " + 5);
console.log("5" + 5);
console.log("5" - 2); // NaN not a number
console.log("5" * 2);
console.log("10"/2);
console.log("hello" - 1); // NaN not a number

// type casting
console.log(+"5" + 5); // unary plus operator

console.log(+"hello" + 5); // NaN not a number

console.log(typeof +"5"); // number
console.log(2+3-4+"6"-2);
console.log(2+3-4+ + "6");

// conditional statement
// if , if-else, if-else-if, switch-case, else-if(ladder),ternary operator 

if(true){   
    console.log("i am True");
}

if(false){
    console.log("hii i am true");
}else{
    console.log("hii i am false");
}

// let mark= prompt("Enter your mark:");
// if(mark>=90){
//     console.log("A");
// }
// else if(60<=mark && mark>=80){
//     console.log("B");
// }
// else if(40<=mark && mark>=60){
//     console.log("C");
// }
// else{
//     console.log("F");
// }
// console.log(mark);


// let Marks=prompt("enter your mark:");
// if(Marks>=90){
//     console.log("A");
// }
// else if(60<=Marks<=80){
//     console.log("B");
// }
// else if(40<=Marks<=60){
//     console.log("C");
// }
// else{
//     console.log("F");
// }
// console.log(Marks);

op= "Average";
switch(op) {
    case "A":{
        console.log("Amazing");
    }
    break;
    case "A":{
        console.log("Good");
    }
    break;
    case "A":{
        console.log("Average");
    }
    break;
    default:{
        console.log("Fail");
    }
    break;
}

console.log(false?"i am true":"i am false");
console.log(false && "i am true");
console.log(true || "");