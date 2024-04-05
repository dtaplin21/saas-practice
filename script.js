import { config } from "dotenv";
config()

import { Configuration, OpenAIApi } from "openai"

const openaia = new OpenAIApi(new Configuration({
    apiKey: process.env.API_KEY
}))

