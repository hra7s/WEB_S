
//Event listeners 

//Event --> The action performed by the user to interact with the website 
//different types of events 
//Mouse Events , keyboard events , dom events 


//EventListeners 

//inline Eventlisteners 
//onEvent listeners 
//addEventListeners 

let imEl= document.getElementById("im")
let offEl= document.getElementById("off")
let onEl= document.getElementById("on")

// offEl.onclick=function (){

//      imEl.src="https://www.w3schools.com/js/pic_bulboff.gif"

// }

// onEl.onclick=function (){
//     imEl.src='https://www.w3schools.com/js/pic_bulbon.gif'


// }



onEl.addEventListener("click",()=>{
 imEl.src='https://www.w3schools.com/js/pic_bulbon.gif'

})
offEl.addEventListener("click",()=>{
    imEl.src="https://www.w3schools.com/js/pic_bulboff.gif"
})



let inpEl= document.getElementById("txt")

inpEl.addEventListener("keyup",(e)=>{
    console.log(e)
})


let btnEl=document.getElementById("btn")

btnEl.addEventListener("mouseover",()=>{
    btnEl.textContent="React"
})

btnEl.addEventListener("mouseleave",()=>{
    btnEl.textContent="Mouse over"
})