import inquirer from "inquirer";

const answers : {
    Sentence: string
}= await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
])

const words = answers.Sentence.trim().split(" ")

console.log(`your sentence word is ${words.length}`)
