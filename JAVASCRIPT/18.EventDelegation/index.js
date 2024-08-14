
let listEl= document.getElementById("list")

listEl.addEventListener("click",(e)=>{

    e.target.classList.toggle("add")

})

//Events can be added to a parent element instead of adding to every single element. 