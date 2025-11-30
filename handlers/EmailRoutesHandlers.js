import { getEmails } from "../utils/GetEmails.js";
import { postEmails } from "../utils/PostEmails.js";
import { sendResponse } from "../utils/SendResponse.js";

export const handleGetEmails = async (res) => {
  const parsedEmail = await getEmails();
  const content = JSON.stringify(parsedEmail);

  sendResponse(res, 200, "application/json", content);
};

export const handlePostEmails = async (req, res) => {
  const initialEmail = await getEmails();

  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", async () => {
    try {
      const parsedEmail = JSON.parse(body);
      const finalEmail = [...initialEmail, parsedEmail];

      sendResponse(res, 200, "application/json", JSON.stringify(parsedEmail));

      await postEmails(finalEmail);
    } catch (error) {
      sendResponse(res, 400, "text/plain", "Invalid JSON");
    }
  });
};
