import { config } from "dotenv";
import OpenAI from "openai"
import readline from "readline"
config()


const openai = new OpenAI();

const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

userInterface.prompt()


//   async function main() {
//     const completion = await openai.chat.completions.create({
//         messages: [{ role: "user", content: "You are a helpful assistant." }],
//         model: "gpt-3.5-turbo",
//     })
//     .then(res => {
//         console.log(res)
//     })

//     console.log(completion.choices[0]);
//   }  

//   main()

   







// openai.createChatCompletion({
//     model: "gpt-3.5-turbo",
//     messages: [{role: "user", content: "Hello ChatGPT"}]
// }).then(res => {
//     console.log(res)
// })