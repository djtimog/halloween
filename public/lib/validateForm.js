export const validateForm = (Error, title, country, timeStamp, story) => {
  if (!title.trim() || title.trim().length < 3) {
    Error.title = "Title must be more than 3 characters";
  } else {
    Error.title = "";
  }
  if (!country.trim() || country.trim().length < 3) {
    Error.country = "Country must be more than 3 characters";
  } else {
    Error.country = "";
  }
  if (!timeStamp.trim()) {
    Error.timeStamp = "The default date will be Today, click to change it";
  } else {
    Error.timeStamp = "";
  }
  if (!story.trim() || story.trim().length < 150) {
    Error.story = "Story must be at least 100 words Long";
  } else {
    Error.story = "";
  }
};
