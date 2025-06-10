const prompt = require('prompt-sync')();

// This program calculates the ingredients needed to make chai based on the number of cups requested.
// CHAI INGREDIENTS CALCULATOR
// Each cup of chai requires:
// - 200ml of water
// - 50ml of milk
// - 1 tablespoon of tea leaves
// - 2 teaspoons of sugar
// The user will input the number of cups they want to make, and the program will calculate the total ingredients needed.


// Prompt user for number of chai cups
let cups = prompt("How many cups of chai do you want to make?"); // Ask user for the number of cups of chai
cups = Number(cups); // Convert input to a number

// Calculate ingredients based on cups
let water = 200 * cups;       // 200ml water per cup
let milk = 50 * cups;         // 50ml milk per cup
let teaLeaves = 1 * cups;     // 1 tbsp tea leaves per cup
let sugar = 2 * cups;         // 2 tsp sugar per cup

// Display the results
console.log("For " + cups + " cups of chai, you need:"); // Display the number of cups requested
console.log("- Water: " + water + " ml"); // Display the amount of water needed
console.log("- Milk: " + milk + " ml"); // Display the amount of milk needed
console.log("- Tea Leaves: " + teaLeaves + " tablespoons"); // Display the amount of tea leaves needed
console.log("- Sugar: " + sugar + " teaspoons"); // Display the amount of sugar needed
console.log("Enjoy your chai!"); // Final message to the user
// End of Chai Ingredients Calculator