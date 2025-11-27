import path from "node:path";
import fs from "fs/promises";

export const getData = async () => {
  try {
    const pathJson = path.join("data", "data.json");
    const data = await fs.readFile(pathJson, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
    return [];
  }
};
