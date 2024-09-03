

// function sum(a,b,c,d,e,a){
//     console.log(a+b+c+d+e+f)

// }

// sum(1,2,3,4,5,6)  //21 



//currying --> instead of taking all arguments at a time , a function which takes a single argument return another function which takes another argument and returns another function untill all the arguments get finishes 

function sum(a){
    return function sum1(b){
        return function sum2(c){
            return function sum3(d){
                return function sum4(e){
                    console.log(a+b+c+d+e)
                }
            }
        }
    }

}

sum(1)(2)(3)(4)(5)