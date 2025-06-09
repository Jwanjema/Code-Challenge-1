// Get amount to send from user
let amount = prompt("Unatuma Ngapi?(KES):");
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