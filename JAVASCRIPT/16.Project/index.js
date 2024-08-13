

let divEl= document.getElementById("div")
let spanEl= document.getElementById("span")

let btnEl= document.getElementById("btn")
console.log(btnEl)


let arr=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]

btnEl.addEventListener("click",()=>{
    console.log("hello")
    let hexcode="#"
    for(let i=0;i <6;i++){
        let index=Math.floor(Math.random()*16)
        hexcode= hexcode+arr[index]

    }

    spanEl.innerHTML=hexcode;
    divEl.style.backgroundColor=hexcode
})