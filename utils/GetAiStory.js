import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function getStory() {
  const prompt = `
Generate a JSON object with the following keys:
- title: Give the story a chilling Halloween-themed title.
- country: A country that best fits the story.
- timeStamp: October 31, 1845 by 12:00AM.
- story: Write a really scary Halloween story set in the country key. 
The story must be at least over 300 words long, vividly terrifying, and filled with suspense. 
It should describe supernatural events, eerie settings, and horrifying encounters that make the reader feel unsettled.

Return only the JSON object, no extra text.
`;

  const result = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
  });

  let text = result.text;
  text = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
  return text;
}
