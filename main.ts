#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let mybalance =5000;
let mypin = 1234;

console.log(chalk.green("\n\t welcome to umairs - Atm Machine \n"))

let pinanswer = await inquirer.prompt([
    {
        name:"pin",
        type:"number",
        message:chalk.yellow("\n enter your pin code:"),
    }
])

if(pinanswer.pin === mypin){
    console.log(chalk.blue("\n pin is correct,login successfully"))

let operationAns =await inquirer.prompt([
    {
        name:"operation",
        type:"list",
        message:"\n select an operation",
   choices:["Withdraw amount","check balance"]
    }
])

 if (operationAns.operation === "Withdraw amount")
    {

let withdrawAns = await inquirer.prompt([
    {
name:"withdrawmethod",
type:"list",
message:"\n select withdraw method:",
choices:["fast cash","enter amount"]
    }
])

if(withdrawAns.withdrawmethod === "fast cash"){

    let fastAns = await inquirer.prompt([
        {
            name:"fastcash",
            type:"list",
            message:"\n select amount",
            choices:[500,1000,2000,3000,4000,5000,6000,7000,10000]
        }
    ])

if(fastAns.fastcash > mybalance){
    console.log(chalk.red("\n Insufficient balance"))
}

else{
    mybalance -= fastAns.fastcash ,
    console.log(`\n ${fastAns.fastcash } withdraw successfully`)
console.log(`\n your remaining account balance is :${mybalance}`)
}

}

else if(withdrawAns.withdrawmethod === "enter amount"){
    let amountAns =await inquirer.prompt([
        {
            name:"amount",
            type:"number",
            message:"\n enter the amount to withdraw:", }
        ])

    if(amountAns.amount > mybalance){
        console.log(chalk.red("\n insuficient balance"));
    }

    else{
        mybalance -= amountAns.amount;
        console.log(`\n ${amountAns.amount} withdraw successfully`)
    console.log(`\n your remaining account balance is :${mybalance}`)
    
    }
}


    }
          else //(operationAns.operation === "check balance")
          {
            console.log(`\n your account balance is: ${mybalance}`)
        }
    }

else{
    console.log(chalk.red("\n pin is incorrect try again"))
}


