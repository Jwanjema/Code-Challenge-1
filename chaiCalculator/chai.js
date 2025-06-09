let cups = prompt("How many cups of chai do you want to make?");
cups = Number(cups);

let water = 200 * cups;
let milk = 50 * cups;
let teaLeaves = 1 * cups;
let sugar = 2 * cups;

console.log("For " + cups + " cups of chai, you need:");
console.log("- Water: " + water + " ml");
console.log("- Milk: " + milk + " ml");
console.log("- Tea Leaves: " + teaLeaves + " tablespoons");
console.log("- Sugar: " + sugar + " teaspoons");
console.log("Enjoy your chai!");