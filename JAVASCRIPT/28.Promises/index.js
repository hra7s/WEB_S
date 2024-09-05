


//Synchronous --> line by line code execution 

//Async --> not line by line 


// console.log("hello1")

// setTimeout(()=>{
//     console.log("hello2")
// },100)

// console.log("hello3")


//Promise is nothing but a object which eventual completion of either success or failure which resulting a value 


//Sucess 
//reject(failure)
//pending (either sucess or failure)



// console.log("hello1")

// fetch("https://www.swiggy.c/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
// .then((res)=>{return res.json() })
// .then((data) => console.log(data))
// .catch((e)=> console.log(e))

// console.log("hello2")



//how to create a promise 


// const myPromise= new Promise((resolve,reject)=>{

// })
//async await 



const fetchData= async()=>{
  try{


    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const res= await data.json()
    console.log(res)
    
}
catch(e){
    console.log(e)
}
}

fetchData()

//async await try catch is the new way of handling promises 
