//  #premitive  -- call by value
//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

//  Non premitive(Reference type) -- call by reference 

//  types : Array, Objects, Functions
//  Master of javascript : Objects, Browser's web events.

const run = 38;
const Name = "lucky";
const isRight = true;
let usermail;
const id = Symbol('123');
const anotherId = Symbol('123');

//console.log(id === anotherId);
const myarray = ["one","two","three","four"];
let myObj = {
    name : "aniket",
    age : 22,
}
console.log(typeof myObj);

//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Stack(Premitive) , Heap(Non Premitive)

//  Stack Memory Example
let myrealName = "AniketDamami"

let petName = myrealName
petName = "Lucifer"

console.log(myrealName);
console.log(petName);


//  Heap Memory Example
let userOne = {
    email : "userOne@google.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "Aniketkumar@google.com"
console.log(userOne.email);
console.log(userTwo.email);