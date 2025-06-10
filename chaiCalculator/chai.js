const prompt = require('prompt-sync')();

// Prompt user for number of chai cups
let cups = prompt("How many cups of chai do you want to make?");
cups = Number(cups);

// Calculate ingredients based on cups
let water = 200 * cups;       // 200ml water per cup
let milk = 50 * cups;         // 50ml milk per cup
let teaLeaves = 1 * cups;     // 1 tbsp tea leaves per cup
let sugar = 2 * cups;         // 2 tsp sugar per cup

// Display the results
console.log("For " + cups + " cups of chai, you need:");
console.log("- Water: " + water + " ml");
console.log("- Milk: " + milk + " ml");
console.log("- Tea Leaves: " + teaLeaves + " tablespoons");
console.log("- Sugar: " + sugar + " teaspoons");
console.log("Enjoy your chai!");