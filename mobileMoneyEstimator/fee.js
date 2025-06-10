const prompt = require('prompt-sync')();

// MOBILE MONEY TRANSACTION FEE ESTIMATOR
// This program calculates the transaction fee for sending money via mobile money
// Basic fee is 1.5% of the amount sent
// Minimum fee is 10 KES, maximum fee is 70 KES 
// User inputs the amount they want to send
// and the program calculates the transaction fee and total amount to be debited.


// Get amount to send from user
let amount = prompt("Unatuma Ngapi?(KES): ");
amount = Number(amount);

// Calculate basic 1.5% fee
let basicFee = amount * 0.015;

// Determine final fee with min/max limits
let transactionFee;
if (basicFee < 10) {
    transactionFee = 10;          // Minimum fee is 10 KSH
} else if (basicFee > 70) {
    transactionFee = 70;          // Maximum fee is 70 KSH
} else {
    transactionFee = basicFee;    // Use calculated fee if within limits
}

// Calculate total amount to debit
let totalAmount = amount + transactionFee;

// Display transaction details
console.log("Sending KSH " + amount + ":");
console.log("Calculated Transaction Fee: KSH " + transactionFee);
console.log("Total amount to be debited: KSH " + totalAmount);
console.log("Send Money Securely!");