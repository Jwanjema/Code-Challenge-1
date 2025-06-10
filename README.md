# Week 1 Code Challenge

## Description
This repository contains three JavaScript programs that solve everyday utility problems:

1. Chai Calculator (chai.js) - Calculates tea ingredients

    This program calculates the ingredients needed to make chai based on the number of cups requested.
    Each cup of chai requires:
    - 200ml of water
    - 50ml of milk
    - 1 tablespoon of tea leaves
    - 2 teaspoons of sugar
    The user will input the number of cups they want to make, and the program will calculate the total ingredients needed.

2. Boda Fare Calculator (fare.js) - Calculates ride costs

     This program calculates the fare for a boda boda ride based on distance.
     The fare structure is as follows:
     - Base fare: KES 50
     - Charge per kilometer: KES 15
     The user will input the distance in kilometers, and the program will calculate the total fare.
 
3. Mobile Money Calculator (fee.js) - Calculates transfer fees

    This program calculates the transaction fee for sending money via mobile money.
    - Basic fee is 1.5% of the amount sent.
    - Minimum fee is 10 KES, maximum fee is 70 KES. 
    - User inputs the amount they want to send.
    The program calculates the transaction fee and total amount to be debited.

## How to Run
### Prerequisites
- [Node.js](https://nodejs.org/) installed on your computer
- VS Code or any code editor

### Setup Instructions
1. **Install Node.js** (if not already installed)
   - Download from [https://nodejs.org/](https://nodejs.org/)
   - Verify installation by running in terminal:
     ```bash
     node -v
     npm -v
     ```

2. **For programs using `prompt-sync`** (user input)
   - Install the package once:
     ```bash
     npm install prompt-sync
     ```

### Running Any Program
1. Open the program file in VS Code
2. Open the terminal (Ctrl+` or Terminal > New Terminal)
3. Run with Node.js:
   ```bash
   node filename.js
 
  (Replace filename.js with the actual JavaScript file name)

## Author
Joe Wanjema

## License
This project is licensed under the MIT License.
