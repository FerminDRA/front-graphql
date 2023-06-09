import { Configuration, OpenAIApi } from "openai";

export const openaiConfig = {
  getOpenai: function () {
    const configuration = new Configuration({
      apiKey: "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",
    });

    if (!configuration.apiKey) {
      throw new Error("OpenAI API key not configured, please follow instructions in README.md");
    }

    return new OpenAIApi(configuration);
  }
};


