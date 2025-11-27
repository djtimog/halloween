import path from "node:path";
import fs from "fs/promises";
import { getContentType } from "./GetContentType.js";
import { sendResponse } from "./SendResponse.js";

export const serveStatic = async (req, res, baseDir) => {
  const url = req.url === "/" ? "/index.html" : req.url;
  const publicDir = path.join(baseDir, "public");
  const pathToresource = path.join(publicDir, url);

  const contentType = getContentType(url);
  try {
    const content = await fs.readFile(pathToresource);
    sendResponse(res, 200, contentType, content);
  } catch (error) {
    if (error.code === "ENDENT") {
      const content = await fs.readFile(publicDir, "404.html");
      sendResponse(res, 404, contentType, content);
    } else {
      sendResponse(
        res,
        500,
        "text/html",
        "<html><h1>Server Error: ${error.code}</h1></html>"
      );
    }
    throw new Error(error);
  }
};
