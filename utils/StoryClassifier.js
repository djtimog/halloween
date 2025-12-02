import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function isStoryScary(storyText) {
  const prompt = `
        Classify the following story as "scary" or "not_scary".
        A scary story must include fear, horror, suspense, darkness, ghosts, monsters, danger, or an unsettling mood.
        Respond with only: scary or not_scary.

        Story:
        ${storyText}
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

  let output = result.text.trim().toLowerCase();
  return output === "scary";
}
