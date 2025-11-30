import nodemailer from "nodemailer";
import { buildScaryEmail } from "./EmailTemplate.js";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendStoryToSubscribers(storyObject, subscribers) {
  for (const email of subscribers) {
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email.email,
        subject: `🎃 Halloween Story: ${storyObject.title}`,
        html: buildScaryEmail(storyObject),
      });

      console.log(`Story sent to ${email.email}`);
    } catch (err) {
      console.error(`Failed to send to ${email.email}:`, err);
    }
  }
}
