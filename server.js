import http from "node:http";
import { serveStatic } from "./utils/ServeStatic.js";
import { handleGet, handlePost } from "./handlers/RoutesHandlers.js";

const PORT = process.env.PORT || 8000;
export const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
  if (req.url === "/api") {
    if (req.method === "GET") {
      return handleGet(res);
    } else {
      return handlePost(req, res);
    }
  } else if (!req.url.startsWith("/api")) {
    return await serveStatic(req, res, __dirname);
  }
});

server.listen(PORT, () =>
  console.log("server's running on port", `http://localhost:${PORT}`)
);
