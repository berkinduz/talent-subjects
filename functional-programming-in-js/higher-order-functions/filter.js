let animals = [
  { name: "Fluffykins", species: "rabbit" },
  { name: "Caro", species: "dog" },
  { name: "Hamilton", species: "dog" },
  { name: "Harold", species: "fish" },
  { name: "Ursula", species: "cat" },
  { name: "Jimmy", species: "fish" },
];

// Want to filter of the dogs
let dogs = animals.filter(function (animal) {
  return animal.species === "dog";
});

console.log(dogs);
/**
 * Out: [
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' }
]
 */
