//what is url  -->? 


//url 

//http methods 

//HTTP REQUEST (CLIENT)
//HTTP RESPONSE (SERVER)


//HTTP REQUEST --> 

//1. startline    -->1.1  url 1.2 http methods 1.3 http version 
//2. headers (additional information)
//3. Body (main data)
//1.2.1   CRUD (CREATE READ UPDATE DELETE)
// CREATE (POST)  READ (GET) UPDATE (PUT) DELETE (DELETE)


let data={
    // name:"React",
    email:"react123@gmail.com",
    // status:"active",
    // gender:"female"
}
let url="https://gorest.co.in/public/v2/users/7382969"
let options={
    method:"DELETE",
    headers:{
        "Content-Type" : "application/Json",
        Accept:"application/Json",
        Authorization: "Bearer "
    },
    body: JSON.stringify(data)
}


fetch(url,options)
.then((res)=>{return res.json()})
.then((data)=> {console.log(data)})
.catch((e)=> console.log(e))

//promise chaining 

//https://gorest.co.in/ 