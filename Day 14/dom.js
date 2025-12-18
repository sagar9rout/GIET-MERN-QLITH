

let h1 = document.querySelector("#heading");
console.log(h1);

let para = document.querySelector(".para");
console.log(para);

let h2 = document.querySelector("h2");
console.log(h2);

let paras = document.querySelectorAll(".para");
console.log(paras);
console.log("First paragraph:", paras[0]);
console.log("First paragraph:", paras[0].innerText);

paras[0].innerText = "Updated paragraph text";// through this we can update text of html element 
//para[0] is a object of html element so we can use innerText property to update text 
// innertext only return text content no html tags

console.log(paras[1].innerHTML);// innerHTML return text content with html tags if present
paras[1].innerHTML = "<span style='color:blue'>I can do this all day</span> <i> paragraph with HTML content</i>.";// we can also add html tags using innerHTML

paras[1].style.color = "red";// we can also update css properties using style property
paras[1].style.backgroundColor = "yellow";// for background-color we use backgroundColor in js
document.body.style.backgroundColor = "pink";// to change body background color

console.log(paras[0].className);// to get class name of element
console.log(paras[0].classList);// to get list of classes of element

paras[1].classList.add("para1", "para2");// to add multiple classes to element
paras[1].classList.remove("para1");// to remove class from element
console.log(paras[1].classList.contains("shutter"));// to check whether class is present or not it return boolean value
console.log(paras[1].classList.contains("para2"));

// to toggle class (if class is present it will remove it otherwise it will add it)
paras[0].classList.toggle("para2");
paras[0].classList.toggle("para5");

let h8= document.createElement("h8");// to create new html element
console.log(h8);
h8.innerText = "This is a new heading created using JS.";// to add text to newly created element

document.body.appendChild(h8);// to add newly created element to DOM we can use appendChild method, only single element can be added at a time
document.body.append(h1,h8);//to add multiple elements we can use append method in this body is exist in html using append in JS we enter in the body

// to remove element from DOM we can use remove() method
// paras[0].remove();// this will remove first paragraph from DOM
// to remove specific child element from parent we can use removeChild() method
// document.body.removeChild(h8);// this will remove h8 element from body
// Note: removeChild() method needs parent element to remove specific child element

let b= document.createElement("button");
b.innerText = "Click Me";
console.log(b);
let bo= document.createElement("b");
bo.innerText = "Bold Text";
console.log(bo);

let div=document.querySelector(".parent")
console.log(div)

// to get inside div
div.append(b)   // add in last of parent
div.append(bo)
div.prepend(bo) // add in first
div.before(b)

// append and prepend (inside operation)
// before and after (outside operation)

let handleBtn=()=>
{
    console.log("Access Me")
}


let button=document.querySelector("#btn1")
button.onclick=()=>
{
    console.log("log me")
}
console.log(button)

let btn2=document.querySelector("#btn2")
console.log(btn2)
btn2.addEventListener("sign",()=>
{
    console.log("btn clicked")
});

let pbody=document.getElementById("paragraph");
console.log(pbody);
// pbody.addEventListener("dblclick",()=>
// {
//     console.log("para double click");
// })

pbody.addEventListener("mousedown",()=>
{
    console.log("mouse down");  //click on it show mouse down, when leave click it mouse up
})

pbody.addEventListener("mouseup",()=>
{
    console.log("mouse up"); //mouse click on upper
})

pbody.style.backgroundColor="red";
pbody.addEventListener("mousemove",()=>
{
    console.log("mouse move");//movement of mouse inside the target area show
})

pbody.style.backgroundColor="blue";
pbody.addEventListener("mouseenter",()=>
{
    console.log("mouse enter");
})

pbody.style.backgroundColor="yellow";
pbody.addEventListener("mouseleave",()=>
{
    console.log("mouse leave");
})