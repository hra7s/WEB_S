


// window.addEventListener("online",()=>{
//     console.log("🟢🟢🟢🟢🟢🟢")
// })

// window.addEventListener("offline",()=>{
//     console.log("🔴🔴🔴🔴🔴🔴")
// })/


//armstrong number 

// 1234 ==> 1^4 + 2^4 + 3^4+ 4^4
// 153 ==> 1^3 + 5^3+ 3^3 = 1+ 125 + 27 = 153






//100 to 100000


for (let i=0;i<=100000;i++){
    let len = String(i).length 

    
let sum=0
for (let each of String(i)){
    sum=sum+Math.pow(each,len)
}

if (sum===i){
    console.log(i)
}


}