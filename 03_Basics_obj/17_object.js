const instUser = new Object();

instUser.name ="Vivek"
instUser.Id = "viveksingh2211"
instUser.email = "singh@google.com"
instUser.login = true

// console.log(instUser);

// console.log(Object.keys(instUser))

// console.log(Object.values(instUser))

// console.log(Object.entries(instUser))

// console.log(instUser.hasOwnProperty('login'))       // ----> Is 'login' there or not if it is there then true otherWise False.



const regularUser ={
    email : "Harshit@ybl",
    fullName: {
        userName: {
            FirstName: "Rahul",
            LastName: "Yadav"
        }
    }
}
// console.log(regularUser)

// console.log(regularUser.email)

// console.log(regularUser.fullName.userName.FirstName)

// console.log(regularUser.userName?.FirstName);




const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1, obj2};

// const obj3 =Object.assign(obj1, obj2);

/*  syntax of assign
    const returnedTarget = Object.assign(target, source);
*/
const obj3 =Object.assign({},obj1, obj2);

// spread operator

// const obj3 = {...obj1, ...obj2}

// console.log(obj3);



// Arrya Inside the object
const realUser =[
    {
        userId: "harshit",
        profile: "mr.Sharma"
    },
    {
        userId: "Rahul",
        profile:"my Beta"
    },
    {
        userId: "Aman",
        profile: "mr.Singh"
    }
]

// console.log(realUser);

// console.log(realUser[1].profile)


const course = {
    courseName: "java Script Hindi",
    coursePrice: 2000,
    courseInstructor: "Vivek Singh"
}

// console.log(course.courseInstructor)

const {courseInstructor: instructor} = course
console.log(instructor)



// Go and Read the Documentation in MDN
//  1. assign
//  2. spread
//  3. entries
//  4. value
//  5. keys
