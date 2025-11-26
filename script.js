import http from "node:http";
import path from "node:path";
import fs from "fs/promises";

const PORT = process.env.PORT || 8000;

const server = http.createServer(async (req, res) => {
  const url = req.url;
  const pathname = path.join("public", url === "/" ? "index.html" : url);
  const data = await fs.readFile(pathname);
  console.log(url);
  res.setHeader("Content-Type", "text/html");
  res.end(data);
});

server.listen(PORT, () =>
  console.log("server's running on port", `https://localhost:${PORT}`)
);
