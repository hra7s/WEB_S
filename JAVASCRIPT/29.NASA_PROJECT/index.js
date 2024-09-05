

let headEl= document.getElementById("head")

let paraEl= document.getElementById("exp")

let imgEl= document.getElementById("im")



async function fetchData(){
    const res= await fetch("https://api.nasa.gov/planetary/apod?api_key=")
    const data= await res.json()

    headEl.innerHTML=data.title
    paraEl.innerHTML=data.explanation 
    imgEl.src=data.hdurl

    console.log(data)

}

fetchData()