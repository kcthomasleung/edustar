const OpenAI = require("openai-api");
import dotenv from "dotenv";
dotenv.config();
const OpenAIapiKey = process.env.OPENAI_API_KEY;

const openai = new OpenAI(OpenAIapiKey);

export async function solveMathProblem(req, res) {
  const gptResponse = await openai.complete({
    engine: "text-davinci-002",
    // engine: 'curie',
    prompt:
      "Given a topic: generate a question along with a set of multiple-choice answers. *Important* Only for the correct answer, place a dollar sign after it. " +
      req,
    // prompt: "Welcome to the Mathematical Mastermind, a language model trained to solve mathematical problems. I am capable of understanding and solving mathematical problems presented in either text or image form. Please provide me with your mathematical problem and I will calculate the answer and only output the answer. Note: I am specifically designed to handle mathematical enquiries. If your question is not mathematical in nature, I may not be able to assist you. Please let me know if you have any further questions." + req,
    // prompt: "You're a mathematical mastermind that is designed to solve the input problem, whether from text or an image, Only output answer. !Important, when the question isn't mathematical let the user know you're designed to handle mathematical enquiries only." + req,
    maxTokens: 2048,
    temperature: 0.7,
    topP: 1,
    presencePenalty: 0,
    frequencyPenalty: 0.5,
    bestOf: 1,
    n: 1,
  });
  const solution = `${gptResponse.data.choices[0].text}`;

  return solution;
}
