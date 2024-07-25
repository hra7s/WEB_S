

//not defined vs undefined
// var t;
// console.log(t) //undefined
// console.log(a) not defined


//GEC 

var f=100

function sum(){
    var g=200
    function war(){
        var e=300
        function qer(){
          
            console.log(f+g+e)
        }
        qer()
    }
    war()
}
sum() 

//here sum() is code execution 


//hoisting 

//variable declarations are moved to the top of the scope 
// console.log(d)

// var d=9