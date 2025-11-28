import { getData } from "../utils/GetData.js";
import { postData } from "../utils/PostData.js";
import { sendResponse } from "../utils/SendResponse.js";

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
      const finalData = [...initialData, parsedData];
      await postData(finalData);
    } catch (error) {
      sendResponse(res, 400, "text/plain", "Invalid JSON");
    }
  });
};
