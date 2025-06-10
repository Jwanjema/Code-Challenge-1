const prompt = require('prompt-sync')();
/**
    * Boda Boda Fare Calculator
    * This program calculates the fare for a boda boda ride based on distance.
    * The fare structure is as follows:
    * - Base fare: KES 50
    * - Charge per kilometer: KES 15
    * The user will input the distance in kilometers, and the program will calculate the total fare.
 */

// Get distance from user
let distance = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:"); // Prompt user for distance in kilometers
distance = Number(distance); // Convert input to a number

// Fare calculation constants
const BASE_FARE = 50; // Base fare for boda boda ride
const PER_KM_CHARGE = 15; // Charge per kilometer

// Calculate charges
const distanceCharge = distance * PER_KM_CHARGE; // Total fare calculation
const totalFare = BASE_FARE + distanceCharge; // Total fare including base fare and distance charge

// Display results
console.log("\nUko kwote? Io ni " + distance + " km:"); // Display distance
console.log("Ukikalia Pikipiki: KES " + BASE_FARE); // Display base fare
console.log("Mpaka Uko: KES " + distanceCharge);  // Display distance charge
console.log("Total: KES " + totalFare); // Display total fare
console.log("\nPanda Pikipiki!"); // Final message to the user
// End of Boda Boda Fare Calculator