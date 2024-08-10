
//

//need to create a any html in js 

// let headEl=document.createElement("h1") //<h1></h1>
// headEl.textContent="welcome to dom operations"
// console.log(headEl)


// document.body.appendChild(headEl)



// let imgEl= document.createElement("img")

// imgEl.src="https://wallpapers.com/images/featured/link-pictures-16mi3e7v5hxno9c4.jpg"

// document.body.appendChild(imgEl)

let divEl= document.getElementById("div")
let headEl=document.createElement("h1") //<h1></h1>
headEl.textContent="welcome to dom operations"

headEl.style.color="blue"
headEl.style.backgroundColor="Green"

let btnEl= document.createElement("button")
btnEl.textContent="login"

btnEl.classList.add("head")
divEl.appendChild(headEl)

divEl.appendChild(btnEl)

// let headEl= document.getElementById("head")
// headEl.innerHTML="welcome to REACT"