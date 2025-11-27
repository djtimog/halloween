import path from "node:path";
import fs from "fs/promises";

export const postData = async (parsedData) => {
  try {
    const pathJson = path.join("data", "data.json");

    await fs.writeFile(pathJson, JSON.stringify(parsedData, null, 2));

    return parsedData;
  } catch (error) {
    console.log(error);
    return [];
  }
};
