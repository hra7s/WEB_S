
//not defined vs undefined
// var t;
// console.log(t) //undefined
// console.log(a) not defined


//GEC 

// var f=100

// function sum(){
//     var g=200
//     function war(){
//         var e=300
//         function qer(){
          
//             console.log(f+g+e)
//         }
//         qer()
//     }
//     war()
// }
// sum() 

//here sum() is code execution 


//hoisting 

//variable declarations are moved to the top of the scope 
// console.log(d)

// var d=9

// console.log(d)
// let d=10


//Hoisting --> Variables declarations with var and function declarations  are moved to the top of the scope before code execution 

// sum()


// function sum(){

//     console.log("hello")

// }




//function expressions and arrow functions --> hoisting not possible 
// play()

// let play=function(){

//     console.log("hello")
// }


//arrow function 

// let war=()=>{
//     return "hello"
// }
// console.log(war())

// let war=()=> "hello"
// console.log(war())

// let war=(a,b)=> a+b
// console.log(war(4,5))


// let war=a=> a
// console.log(war(4))


// let war=()=> "a"
// console.log(war())