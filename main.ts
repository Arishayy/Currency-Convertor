#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n\t You're now at Arisha's Currency Converter - Welcome!\n\t "));

// Defining the list of diff currencies with exchange rate
let exchange_rate: any = {
    "USD": 1, //BASE CURRENCY
    "EUR": 0.9, //EUROPEAN CURRENCY
    "CAD": 1.3, // CANADIAN CURRENCY
    "AUD": 1.65, // AUSTRALIAN CURRENCY
    "PKR": 277.70, //PAKISTANI CURRENCY
    "CNY": 0.14, //CHINESE CURRENCY
    "SAR": 0.27, //SAUDI CURRENCY
    "AED": 0.27, //U.A.E CURRENCY
    "QAR": 0.27, //QATAR CURRENCY
    "AZN": 0.59 // BAKU CURRENCY 
}

// Asking user to select currencies to convert from to
let user_ans = await inquirer.prompt([
    {
        name: "from_currency",
        type : "list",
        message: "Please choose the currency you'd like to convert from.",
        choices: ["USD","EUR","CAD","AUD","PKR","CNY","SAR","AED","QAR","AZN"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Please choose the currency you'd like to convert to.",
        choices: ["USD","EUR","CAD","AUD","PKR","CNY","SAR","AED","QAR","AZN"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the Value to convert.",
    }
]);

// using currency conversion formula
let from_amount = exchange_rate[user_ans.from_currency];
let to_amount = exchange_rate[user_ans.to_currency];
let amount = user_ans.amount

let base_amount = amount / from_amount
let converted_amount = base_amount* to_amount

//For displaying the converted Amount
console.log(`Converted Amount = ${chalk.yellow(converted_amount.toFixed(2))}`);
