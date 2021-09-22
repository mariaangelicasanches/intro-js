let students = [
  "Jonh",
  "Alina",
  "Juan",
  "Dariel",
  "Manny",
  "Amir",
  "Sebas",
  { instructors: ["Vitoria", "Todd", "Daniel", "Jonathan", "Darie", "Zach"] },
  { hous: 400 },
];

students.push("Diana");
students.push("Angie");

students.shift(); //removes the first one
students.unshift("Khrystofer"); // adds at the beginning

console.log(students);

const amount = students.length

console.log(students.pop());

console.log(amount);

if(amount <= 12) {
    console.log('not enough items')
} else {
    console.log('just enough items', amount)
}



function addToArray(newSt) {
    
}