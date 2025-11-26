import { validateForm } from "../utils/validateForm.js";
import { getErrorByIndex } from "../lib/getErrorByIndex.js";
import { EditTimeStamp } from "../lib/dateFormat.js";
import {
  countryDom,
  ErrorDom,
  storyDom,
  timeStampDom,
  titleDom,
} from "../script/upload.js";

export const SubmitForm = async (Error) => {
  const titleValue = titleDom.value;
  const countryValue = countryDom.value;
  const timeStampValue = timeStampDom.value;
  const storyValue = storyDom.value;
  validateForm(Error, titleValue, countryValue, timeStampValue, storyValue);

  if (Error.title || Error.country || Error.story) {
    ErrorDom.forEach((dom, index) => {
      dom.innerText = getErrorByIndex(Error, index);
    });
    return;
  }
  const newTimeStampValue = timeStampValue
    ? new Date(timeStampValue)
    : new Date();

  return setTimeout(() => {
    console.log({
      title: titleValue,
      country: countryValue,
      timeStamp: EditTimeStamp(newTimeStampValue),
      story: storyValue,
    });

    titleDom.value = "";
    countryDom.value = "";
    timeStampDom.value = "";
    storyDom.value = "";

    const successUploadDom = document.getElementById("successUpload");
    const uploadInput = document.getElementById("uploadInput");

    uploadInput.style.display = "none";
    successUploadDom.style.display = "block";

    return {
      title: titleValue,
      country: countryValue,
      timeStamp: EditTimeStamp(newTimeStampValue),
      story: storyValue,
    };
  }, 2000);
};
