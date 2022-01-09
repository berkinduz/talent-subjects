let animals = [
  { name: "Fluffykins", species: "rabbit" },
  { name: "Caro", species: "dog" },
  { name: "Hamilton", species: "dog" },
  { name: "Harold", species: "fish" },
  { name: "Ursula", species: "cat" },
  { name: "Jimmy", species: "fish" },
];

// let names = animals.map(function (animal) {
//   return animal.name + " is a " + animal.species;
// }); OLD VERSION

// ES6 Version:
let names = animals.map((animal) => animal.name + " is a " + animal.species);

console.log(names);
/**
 * [
  'Fluffykins is a rabbit',
  'Caro is a dog',
  'Hamilton is a dog',
  'Harold is a fish',
  'Ursula is a cat',
  'Jimmy is a fish'
]
 */
