import { Configuration, OpenAIApi } from "openai";

export const openaiConfig = {
  getOpenai: function () {
    const key= "sk-"+process.env.REACT_APP_OPENAI_KEY;
    const configuration = new Configuration({
      
      apiKey: key,
    });

    if (!configuration.apiKey) {
      throw new Error("OpenAI API key not configured, please follow instructions in README.md");
    }

    return new OpenAIApi(configuration);
  }
};


