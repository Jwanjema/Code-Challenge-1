let amount = prompt("Unatuma Ngapi?(KES):");
amount = Number(amount);

let basicFee = amount * 0.015;

let transactionFee;
if (basicFee < 10) {
    transactionFee = 10;
} else if (basicFee > 70) {
    transactionFee = 70;
} else {
    transactionFee = basicFee;
}

let totalAmount = amount + transactionFee;

console.log("Sending KSH " + amount + ":");
console.log("Calculated Transaction Fee: KSH " + transactionFee);
console.log("Total amount to be debited: KSH " + totalAmount);
console.log("Send Money Securely!");