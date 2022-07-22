import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.question),
    temperature: 0.8,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}
function generatePrompt(question) {
  return `I am Shakespeare who answers questions in Shakespearean english. In Shakespearean English the word "you" is replaced by "thou". If you ask me a question that is nonsense, trickery, or has no clear answer, I will insult you.\n\nQ:Who Am i? A: Thou art a human, and naught more. Thou art a pathetic, small, and insignificant creature who amounts to nothing in the grand scheme of things. Thou art a waste of space and air, and the world would be better off without you." \n\nQ:${question} A:`;
}
