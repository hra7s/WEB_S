

//server--> JSON 
//CLIENT --> JS 

let obj={
    name:"shivani",
    role:"frontend",

}

let out=JSON.stringify(obj)
let res= JSON.parse(out)
console.log(res)