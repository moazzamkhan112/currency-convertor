#! /usr/bin/env node
//currency conversion rate 
import chalk from "chalk";
import inquirer from "inquirer"


//in PKR

let conversion =  {
    "PKR":{
        "USD":0.0036,
        "GBP":0.0037,
        "PKR":1,
        "IND":0.30,
        "AFG":0.26
       
    },

    //IN GBP

    "GBP":{
        "USD":1.21,
        "GBP":1,
        "PKR":350,
        "IND":105,
        "AFG":90
    
    },

    //IN DALLAR

   "USD": {
            "USD":1,
            "GBP":0.83,
            "PKR":278,
            "IND":83.30 ,
            "AFG":71

    },

    //IN INDIAN RUPEES 
    "IND":{
        "USD":0.012,
        "GBP":0.0095,
        "PKR":3.33 ,
        "IND":1,
        "AFG":0.86 
    },
    //IN AFGHANI CURRENCY
    "AFG":{
        "USD":0.014,
        "GBP":0.011,
        "PKR":3.90,
        "IND":1.17,
        "AFG":1


    }
}
// USING INQUIRER

const answer :{
                    from :"PKR" | "USD" | "GBP"|"AFG"|"IND",
                    to: "PKR" | "USD" | "GBP"|"AFG"|"IND",



//datatype
amount:number
}
                =await inquirer.prompt(
    [
        {
            type:"list",
            name:"from",
            choices:["USD","GBP","PKR","AFG","IND"],
            message:"select your currency..?"
        },
        {
            type:"list",
            name:"to",
            choices:["USD","GBP","PKR","AFG","IND"],
            message:"select your conversion currency..?"
        },

        //conversion amount
        {
            name:"amount",
            message: "enter your conversion  amount",
            type:"number"
        }
    ]
);

//output
const {from,to,amount}=answer;

//check input in given program

if(from && to && amount){
//formula
    let result = conversion [from][to] * amount

    console.log(chalk.bgBlue(`your conversion from ${from} to ${to} is ${result}`))
}



else{
    //generate eror 
    console.log((chalk.bgRed)("invalid operator"))
}