



function sum(){

    console.log("hello")

}



function war(out){
    out()

}

war(sum)


//here i have passed a function as an argument to another function 
//sum --> callback function 
//war --> Higher order function 