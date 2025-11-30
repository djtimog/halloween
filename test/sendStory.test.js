// test/sendStory.test.js
import { handleSendStory } from "../handlers/StoryRoutesHanlder.js";

test("send Stories", async () => {
  const result = await handleSendStory();
  expect(result).toBe("Story sent to subscribers!");
}, 100000);
