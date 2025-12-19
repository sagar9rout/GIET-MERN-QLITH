
// let promise = new Promise((resolve,reject)=>
// {
//     setTimeout(() => {
//         console.log("hello")
//         //resolve("Success")
//         reject("reject")
//     }, 2000);
// })
// console.log(promise);

const { createContext } = require("react");


// promise.then((res)=>
// {
//     console.log(res)
// }).catch((res)=>
// {
//     console.log(res)
// })

// async keyword => use to create [  asnychronous block  ], independent execution
// await keyword => when server didnot fetch data tii that time i can not use data or print/ output data , we will to get data when data get then print or output--- it always try to independent execute

// fetch method

let getData= async()=>
{
    let res= await fetch("https://jsonplaceholder.typicode.com/posts");// fetch ("Api")
    let data=await res.json()// json data
    console.log(data) // till time when data is not fetch for that time we will wait so we use [ await ]
    let ul=document.createElement("ul");
    ul.style.cssText="max-width:1024px;margin:auto;display:flex;flex-wrap:wrap;gap:5px;list-style:none"
    data.forEach((obj)=>
        {
            let li=document.createElement("li");
            li.innerText=obj.title;
            li.style.cssText="width:200px;height:200px;box-shadow:2px 2px 5px black;display:flex;justify-content:center;align-items:center"
            ul.append(li)
        })
    document.body.append(ul)
}
getData()  // status 200 means succesful


//HTTP request
//have 4 Request create,read,update,delete
// create->   post request
// read ->   get request
// update->  put request
// delete->  delete request

let createData=async()=>
{
    let res=await fetch("https://jsonplaceholder.typicode.com/posts",
    {
        method:"POST",
        body:JSON.stringify(
            {
                name:"James Bond",
                age:30
            }
        ),
        headers:{
            "Content-type":"application/json"
        }
    });
    let data= await res.json();
    console.log(data)
    console.log("Succesfully data saved")
}
createData()

let updateData = async ()=>
{
    let res= await fetch ("https://jsonplaceholder.typicode.com/posts/1",
    {
        method: "PUT",
        body: JSON.stringify(
            {
                title:"NEW tittle"
            }
        ),
        headers:
        {
            "Content-Type":"application/json"
        }
    });
    let data= await res.json();
    console.log(data);
    console.log("Successfuly update")
}
updateData()

let deletedata=async()=>
{
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/1",
        {
            method:"DELETE"
        }
    );
    let data= await res.json();
    console.log(data);
    console.log("Successfully Deleted")

}
deletedata()