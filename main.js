#! /usr/bin/env node
// Importing inquirer and chalk pakages
import inquirer from "inquirer";
import chalk from "chalk";
//Display a colourfull Wellcome message 
console.log(chalk.bold.cyanBright("\n \t \tCode with Fatima - WORD_COUNTER"));
console.log("=".repeat(60));
// Prompt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentences"
    }
]);
//Trimming the sentences and splitting it into word on "space"
let words = answers.sentence.trim().split(" ");
// Analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Words :"));
console.log(words);
console.log(chalk.bold(`\n - Word Count : ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
