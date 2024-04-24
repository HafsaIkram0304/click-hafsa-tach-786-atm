#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";


let userId: string = "HI";
let userPin: number = 2511;
let myAcount: number = 10000;
console.log(chalk.green("\n \t====>>>> Welcom to my ATM <<<<====\n"));

let answer = await inquirer.prompt(
    [
        {
            name: "userId",
            message: chalk.green("\nplease enter userId\n"),
            type: "string"
        },
        {
            name: "userPin",
            message: chalk.green("\nplease enter userPin\n"),
            type: "number"
        }
    ]
);
if(answer.userId === userId && answer.userPin === userPin){
    console.log(chalk.blue("\n \tCongratulations your ID or Pin is correct!!\n"));
}else{
    console.log(chalk.red("\nSorry your Id or Pin incrrect, Please try again\n"));
}
if(answer.userId === userId){
    let acountAns = await inquirer.prompt(
        [
            {
                name: "acountTitle",
                message: chalk.yellow("\nPlease select your Acount\n"),
                type: "list",
                choices: ["Current acount", "Saving Acount"]
            }
        ]
    )
    if(acountAns.acountTitle === "Saving Acount"){
        console.log(chalk.red("\nIt is forbidden in islam, It cannot be done!\n"));
    }
     if(acountAns.acountTitle === "Current acount"){
       let optionAns = await inquirer.prompt(
           [
            {
                name: "option",
                message: chalk.yellow("\nPlease slect one option\n"),
                type: "list",
                choices: ["Fast Cash", "Withdrew", "Check Balance"]
            }
           ] 
        )
        if (optionAns.option ==="Fast Cash"){
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "Select Amount",
                    choices: [2000, 4000, 6000, 8000]
                }
            ])
            if(fastCashAns.fastCash -= myAcount){
                console.log(chalk.blue( `${fastCashAns.fastCash} Your withdrew succesful Thank You!`));
            }
           }
           if(optionAns.option==="Withdrew"){
            let amountAns = await inquirer.prompt(
        
            
            [
                {
                    name: "amount",
                    message:chalk.yellow("\nPlease enter your amount\n"),
                   type: "number" 
                }
            ]
        )
        if(amountAns.amount > myAcount){
            console.log(chalk.red("\nsorry your transection not be success please check your balance\n"));

        }
        else{
            myAcount-=amountAns.amount;
            console.log(chalk.red(`\n${amountAns.amount} has been deducted your Acount\n`));
            console.log(chalk.yellow(`\nyour remaining balance is ${myAcount} Thank You!\n`));
        }
        }
        
        else if(optionAns.option = "Blance Ceck"){
            console.log(chalk.blue(`\nYour corrent balance is ${myAcount} Thank you!\n`));
        }

    
        }        
    
}
        
        
        

        
            
        

    
    

    


        
        
        
    
        

    









