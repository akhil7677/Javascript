const marvel_heroes=["thor","Ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]

//We can even add an array in arrays
marvel_heroes.push(dc_heroes)
console.log(marvel_heroes)
//Using concat
const allHeroes=marvel_heroes.concat(dc_heroes);
console.log(allHeroes);

// using spread operator
//we use ... for spread out operator
const all_NewHEroes=[...marvel_heroes,...dc_heroes];
console.log(allHeroes);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);
// converting to arrays
console.log(Array.isArray("histesh"));
console.log(Array.from("Hitesh"));
//this cannot get converted to array directly
console.log(Array.from({name: "Hitesh"}));


//somethings else
//for converting values into an array
let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
