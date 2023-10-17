// Primitive

// Type Seven ==>  String, Number, Boolean , null, undefined, Symbol, BigInt

const num = 100

const isLogIN = false
const isTemp = null
let userId

const id = Symbol ('123');
const anotherId = Symbol ('123');
console.log(id == anotherId)

const BigInt = 59082080850275  // The rang of Bigint is (-(2^53))  TO  (+(2^53))



// Reference (Non Primitive)

// Type Three ==> Array, Object, Function

const marble = ['Shaktiman', 'Krish','Flying']
console.log(marble)


let myobj = {
    name:'vivek',
    age: 22,
}
console.log(myobj)


let myfunction = function(){
    console.log("Hello World")
}
myfunction();


console.log(typeof(marble))