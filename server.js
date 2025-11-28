import http from "node:http";
import { serveStatic } from "./utils/ServeStatic.js";
import {
  handleGetData,
  handlePostData,
} from "./handlers/DataRoutesHandlers.js";
import {
  handleGetEmails,
  handlePostEmails,
} from "./handlers/EmailRoutesHandlers.js";

const PORT = process.env.PORT || 8000;
export const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
  if (req.url === "/api") {
    if (req.method === "GET") {
      return handleGetData(res);
    } else {
      return handlePostData(req, res);
    }
  } else if (req.url === "/subscribe") {
    if (req.method === "GET") {
      return handleGetEmails(res);
    } else {
      return handlePostEmails(req, res);
    }
  } else if (!req.url.startsWith("/api") && !req.url.startsWith("/subscribe")) {
    return await serveStatic(req, res, __dirname);
  }
});

server.listen(PORT, () =>
  console.log("server's running on port", `http://localhost:${PORT}`)
);
