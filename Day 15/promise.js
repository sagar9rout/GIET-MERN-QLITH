
//key

// key down
// key Up
// key press (ctrl,shift,alt)

//input

// input
// change
// focus
//  blur

document.addEventListener("keydown",(e)=>
{
    console.log(e);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(e.ctrlKey)
    console.log(e.altKey)
    console.log(e.shiftKey)
})

// document.addEventListener("keydown",(e)=>
// {
//     console.log(e.key);
// })

// document.addEventListener("keyup",()=>
// {
//     console.log("key up");
// })

// document.addEventListener("keypress",()=>
// {
//     console.log("key press"); // in  this ctrl, shift,alt doesnot work
// })

// let h1= document.querySelector("#input-tag");
// h1.addEventListener("input",()=>
// {
//     console.log("h1 event")
// })

// h1.addEventListener("change",()=>
// {
//     console.log("change event"); 
// })

// h1.addEventListener("focus",()=>
// {
//     console.log("focus event");
// })

// h1.addEventListener("blur",()=>
// {
//     console.log("blur event");
// })

// let h2=document.querySelector("form");
// console.log(h2)
// h2.addEventListener("submit",()=>
// {
//     console.log("submit")
// })

//window
// window.addEventListener("load",()=>   // addeventlistner ("event name",call back function--varaiable pass)
// {
//     console.log("load")
// })

// window.addEventListener("DOMContentLoaded",()=>
// {
//     console.log("dom load")
// })

// window.addEventListener("resize",()=>
// {
//     console.log("resize")
// })

// window.addEventListener("scroll",()=>
// {
//     console.log("scroll")
// })

let inputfield= document.querySelector("#input-tag");
inputfield.addEventListener("input",(e)=>
{
    console.log("inputfield event")
})

let form=document.querySelector("form");
console.log(form)
form.addEventListener("submit",(evl)=>
{
    evl.preventDefault()
    console.log("submit")
    console.log(evl)
})
 
window.addEventListener("DOMContentLoaded",(e)=>
{
    console.log("dom load")
    console.log(e)
})

//promise status return by server, that time status is pending
   // status
//pending   when data is processing 
//resolve
//reject

// [return] sever in object format in [promise object format]
//accept callback function is= (resolve,reject)=> if succesful data come is [resolve]
                                            //    if succesful data not come [reject]
//promise handle block= then (when promises resoleve)
                    //  catch (when promises reject)

// Create promise using  => [ new promise() ]

