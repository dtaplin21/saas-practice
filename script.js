const express = require("express")
import { config } from "dotenv";
import OpenAI from "openai"
config()
const openai = new OpenAI()
    

    new OpenAI({organization: 'org-3hPrG1oP9eZVG8AiglAgeDP4' })







openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: "Hello ChatGPT"}]
}).then(res => {
    console.log(res)
})