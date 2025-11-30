import { getData } from "../utils/GetData.js";
import { postData } from "../utils/PostData.js";
import { sendResponse } from "../utils/SendResponse.js";
import { sanitizeData } from "../utils/SanitizeData.js";

export const handleGetData = async (res) => {
  const parsedData = await getData();
  const content = JSON.stringify(parsedData);

  sendResponse(res, 200, "application/json", content);
};

export const handlePostData = async (req, res) => {
  const initialData = await getData();

  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", async () => {
    try {
      const parsedData = JSON.parse(body);

      const cleanedData = {
        title: sanitizeData(parsedData.title),
        country: sanitizeData(parsedData.country),
        timeStamp: parsedData.timeStamp,
        story: sanitizeData(parsedData.story),
      };

      const finalData = [...initialData, cleanedData];
      sendResponse(res, 200, "application/json", JSON.stringify(cleanedData));
      return await postData(finalData);
    } catch (error) {
      console.error("Error caught:", error.message, body);
      sendResponse(res, 400, "text/plain", "Invalid JSON");
    }
  });
};
