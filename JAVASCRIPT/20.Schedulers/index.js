


//Schedulers   --> setInterval | setTimeout 


//Scheduler will schedule the execution of a call back function 



//setInterval  --> will schedule the execution of a call back function  in repeated intervals of time 

//clearInterval  -> will stop the execution of callback function 


let setEl= document.getElementById("set")
let clearEl= document.getElementById("clear")

let uniqueId;

// setEl.addEventListener("click",()=>{

//     let count=0

//     uniqueId=setInterval(()=>{
//         count++ 
//         console.log(count)
        
//     },1000)

// })


// clearEl.addEventListener("click",()=>{
//     clearInterval(uniqueId)
//     console.log("interval stopped")
// })


//settimeout --> will execute the callback function only once when the interval time get finished 
// setEl.addEventListener("click",()=>{

// console.log("Plan Execution started")

//     uniqueId=setTimeout(()=>{
  
        
//         console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥")
        
//     },10000)

// })


// clearEl.addEventListener("click",()=>{
//     clearTimeout(uniqueId)
//     console.log("Plan Cancelled")
// })


