const Ram={
	name:"Sriram",
	age: 10 ,
	height:175,
	is_graduate: true,
	weight:"70kgs",
	role:"FrontEnd developer"	,
    "9":"hello",
	car :{
		brand:"Tata",
		name:"Nexon",
		color:"Black",
		speed:"230kmph",	
        hobies :["singing","reading","playing"]
	},
    play: function (){
        console.log("Playing")
    }
}
console.log(Ram.car.hobies[2])
// Ram.play()

//how to access the values of an Object 

//dot notation  . 
//bracket notation [""]


// console.log(Ram.weight) //70kgs 
// console.log(Ram["height"])


//how to update the values of an object 

// Ram.is_graduate=false
// Ram["weight"]=75
// console.log(Ram)


//how to add new properties 

// Ram.color="White"
// console.log(Ram)

//how to delete the objects 

// delete Ram["color"]

console.log(Ram)


//key --> if we want to add some special type of characters 

// key --> starting with number 



// console.log(Ram["9"])