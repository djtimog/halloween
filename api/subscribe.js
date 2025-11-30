import {
  handleGetEmails,
  handlePostEmails,
} from "../handlers/EmailRoutesHandlers.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    return await handleGetEmails(res);
  } else if (req.method === "POST") {
    return await handlePostEmails(req, res);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
