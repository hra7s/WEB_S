

// let arr=[1,2,3,4,5] 
// let out= ["hello",true,null,undefined, [3,4,5,6],{name:"hello"}]

// // out[0]="Tiger"
// console.log(out)

// delete arr[4]

// console.log(out[4][2])

// console.log(typeof(arr))
// console.log(out)

//how to  access the values of an array 

//by using index  

// console.log(arr[4])

//array methods 
//length

// let res= out.length
// console.log(res)/

//push --> 

// let res= out.push("hello")
// console.log(res)
// console.log(out)

//pop 

// let res= out.pop()
// console.log(res)
// console.log(out)

//shift <--> remove the element from the starting position 

// let res= out.shift()
// console.log(res)
// console.log(out)

//unshift  <--> add the element at the stating 

// let res= out.unshift("react")
// console.log(res)
// console.log(out)


//Concat 

// let res= out.concat(3,5,6,7)
// console.log(res)
// console.log(out)


let arr=[4,5,6,7,8] 


let resu= arr.map(each=>each*2)
let fil= arr.filter(each=> each%2==0)
let redu= arr.reduce((accu,current)=>accu*current)
console.log(redu)

console.log(fil)
console.log(resu)
console.log(arr)