import {
  handleGetData,
  handlePostData,
} from "../handlers/DataRoutesHandlers.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    return await handleGetData(res);
  } else if (req.method === "POST") {
    return await handlePostData(req, res);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
