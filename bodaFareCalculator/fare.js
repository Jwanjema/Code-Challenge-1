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
let distance = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
distance = Number(distance);

// Fare calculation constants
const BASE_FARE = 50;
const PER_KM_CHARGE = 15;

// Calculate charges
const distanceCharge = distance * PER_KM_CHARGE;
const totalFare = BASE_FARE + distanceCharge;

// Display results
console.log("\nUko kwote? Io ni " + distance + " km:");
console.log("Ukikalia Pikipiki: KES " + BASE_FARE);
console.log("Mpaka Uko: KES " + distanceCharge); 
console.log("Total: KES " + totalFare);
console.log("\nPanda Pikipiki!");