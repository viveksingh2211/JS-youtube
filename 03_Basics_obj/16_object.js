// Singleton     ---> This is Creating only for the constructor.
// Object.create






const sym = Symbol("Hello my dear!")

// Object Literal

const jsuser = {
    name: "Vivek",
    "full name": "Vivek Singh",
    age: 18,
    email: "vivek@google.com", 
    userlogin: true,
    dayInWeek: ["monday","Tuesday","Friday"],
    // sym: "Hello my dear Second!"
    [sym]: "Hello my dear Second!"

}

// console.log(jsuser.email)      // ---> This is the one method to access the object.

// "full name": "Vivek Singh"  // ---> We can easily access to this method but not in the above method

// console.log(jsuser["full name"])  // ---> But this method is also important to know.

// console.log(jsuser.dayInWeek[2])

// console.log(typeof(String(jsuser.age)))

// console.log(jsuser[sym])

console.log(typeof jsuser[sym])


jsuser.myfun = function(){
    console.log("Hello World")
}

jsuser.myfuntwo = function(){
    console.log(`Hello world ${this.name}`)
}

jsuser.myfuntwo();
jsuser.myfun()



