import path from "node:path";
import fs from "fs/promises";

export const postEmails = async (parsedEmails) => {
  try {
    const pathJson = path.join("data", "emails.json");

    await fs.writeFile(pathJson, JSON.stringify(parsedEmails, null, 2));

    return parsedEmails;
  } catch (error) {
    console.log(error);
    return [];
  }
};
