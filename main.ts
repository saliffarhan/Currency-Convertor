import inquirer from "inquirer"

import chalk from "chalk";

const exchange_currency: any = {
    USD: 1,
    EUR: 0.91,
    GDP: 0.76,
    INR: 74.57,
    PKR: 280

};



let user_Ans = await inquirer.prompt([
    {
    name: "from",
    message: "Enter from Coventor ? ",
    type: "list",
    choices: ["USD", "EUR", "GDP", "IND", "PKR"]
    },

    {
    name: "to",
    message: "Enter to Currency ? ",
    type: "list",
    choices: ["USD", "EUR", "GDP", "IND", "PKR"]
    },

    {
        name: "amount",
        message: "Enter Your Amount ? ",
        type: "number"


    }

]);

// Perform currency conversion by using formula  
let from_amount = exchange_currency[user_Ans.from]
let to_amount = exchange_currency[user_Ans.to]
let amount = user_Ans.amount


// formula by conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount


// Display the converted amount
console.log(chalk.magenta(`Your Converted Amount is: ${chalk.yellow(converted_amount.toFixed())} `));
