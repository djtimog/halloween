import { getStory } from "../utils/GetAiStory.js";
import { getEmails } from "../utils/GetEmails.js";
import { postData } from "../utils/PostData.js";
import { getData } from "../utils/GetData.js";
import { sendStoryToSubscribers } from "../utils/SendStory.js";

export const handleSendStory = async () => {
  try {
    const initialData = await getData();

    const storyText = await getStory();
    const storyObject = JSON.parse(storyText);

    const subscribersList = await getEmails();
    await postData([...initialData, storyObject]);
    await sendStoryToSubscribers(storyObject, subscribersList);
    return "Story sent to subscribers!";
  } catch (err) {
    console.error("Daily job failed:", err);
    return "Daily job failed:", err;
  }
};
