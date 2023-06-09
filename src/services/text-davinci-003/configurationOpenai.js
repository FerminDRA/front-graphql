import { Configuration, OpenAIApi } from "openai";
import dotenv from 'dotenv';
dotenv.config();

export const openaiConfig = {
  getOpenai: function () {
    const secret = process.env.openKey;
    const configuration = new Configuration({
      
      apiKey: secret,
    });

    if (!configuration.apiKey) {
      throw new Error("OpenAI API key not configured, please follow instructions in README.md");
    }

    return new OpenAIApi(configuration);
  }
};


