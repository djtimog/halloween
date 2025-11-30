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
import nodeCron from "node-cron";
import { handleSendStory } from "./handlers/StoryRoutesHanlder.js";

const PORT = process.env.PORT || 8000;
export const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
  nodeCron.schedule("0 0 * * *", async () => {
    console.log("Running daily story job...");
    await handleSendStory();
  });

  if (req.url === "/api") {
    if (req.method === "GET") {
      return await handleGetData(res);
    } else {
      return await handlePostData(req, res);
    }
  } else if (req.url === "/subscribe") {
    if (req.method === "GET") {
      return await handleGetEmails(res);
    } else {
      return await handlePostEmails(req, res);
    }
  } else if (!req.url.startsWith("/api") && !req.url.startsWith("/subscribe")) {
    return await serveStatic(req, res, __dirname);
  }
});

server.listen(PORT, () =>
  console.log("server's running on port", `http://localhost:${PORT}`)
);
