import path from "node:path";
import fs from "fs/promises";

export const getEmails = async () => {
  try {
    const pathJson = path.join("data", "emails.json");
    const emails = await fs.readFile(pathJson, "utf-8");
    return JSON.parse(emails);
  } catch (error) {
    console.log(error);
    return [];
  }
};
