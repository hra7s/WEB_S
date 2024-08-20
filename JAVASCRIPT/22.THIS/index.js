

//this --> key word --> object 


//generally this keyword behavoiur depends on where we have declare 

//if we declare this keyword --> alone 

//console.log(this)

//global or window object 


//if we declare it in Function   -> window or global object 
// function sum(){
//     console.log(this)
// }

// sum()

//in strict mode  --> undefined 


// function sum(){
//     "use strict"
//     console.log(this)

// }

// sum()

"use strict" 

// a=10 
// console.log(a)



//if we declare this keyword in an object --> its refers to that particular object 
// let a={
//     name:"hello",
//     s:"k",
//     fname:function (){
//         console.log(this.name + " " + this.s)

//     }
// }
// a.fname()


//events 


//call apply  bind 

// let Car={
//     name: function (a,b){
//         console.log(this.fname + " " + this.lname + " "+ a + " "+ b)
//     }
// }

// let person={
//     fname:"React",
//     lname:"Js"
// }

// // Car.name.call(person)

// Car.name.call(person,"18.9", "frontend")


// let Car={
//     name: function (a,b){
//         console.log(this.fname + " " + this.lname+ a  + " " + b)
//     }
// }

// let person={
//     fname:"React",
//     lname:"Js"
// }

// // Car.name.apply(person)

// Car.name.apply(person,["16.8","Frontend"])/


//bind
//function borrowing 

let Car={
    fname: "React",
    lname: "Js",
    name: function (){
        return this.fname + " " + this.lname
    }
}
let out={
    fname:"js",
    lname:"Html"
}
let per={
    fname:"abc",
    lname:"xyz"
}
let x=Car.name.bind(out)

let y=Car.name.bind(per)
console.log(y())
console.log(x())
