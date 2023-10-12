const marbals=['spiderman', 'ironman', 'Hulk']

const dc_hero = ['batman','flash','superman']


// marbals.push(dc_hero);

// console.log(marbals);


const all_Array_List = [...marbals, ...dc_hero];

console.log(all_Array_List)



const num = [2,3,55, 64, 32,[23, 46],33, [20,34, 22],44]

const real_Another_Array = num.flat(Infinity);

console.log(real_Another_Array);



console.log(Array.isArray("vivek"))
console.log(Array.from("Singh"))
console.log(Array.from({Name: "Aman"}))


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))
