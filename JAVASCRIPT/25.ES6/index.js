
//Spread operator (...)
//Rest parameter (...rest)'



//used to destructure or unpack the values of an array or an object in to individual items


// let arr=[2,3,4,5,6,7] //memory 
// let a=["hello","react","python"]
// let arr2=[...arr,...a,true,null]  //copy was created 

// console.log(arr2)
// console.log(arr===arr2)



// const obj={name:"hello",age:1}
// const obj2={color:"Red",speed:100}

// console.log({...obj,...obj2}) //copy


//rest parameter


//used to pack the values of an array or an object 



// [x,y,z,...rest]= [1,2,3,4,5,6,6,7]

// console.log(x)
// console.log(y)
// console.log(z)
// console.log(rest)


// const obj={name:"hello",age:1,color:"red", hei:100}

// const {name,age,...rest} = obj
// console.log(rest)
// console.log(name,age)


//template literals 

const a= "React js"

const b="Developer"

//template literals `${}`

// const out= `i am a ${a} ${b} and i am good at ${a}`

// console.log(out)
// const out= "I am a " + a + " " + b + " i am good at " + a 
// console.log(out)

