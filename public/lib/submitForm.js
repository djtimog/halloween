import { validateForm } from "./validateForm.js";
import { getErrorByIndex } from "./getErrorByIndex.js";
import { EditTimeStamp } from "./dateFormat.js";
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

  ErrorDom.forEach((dom, index) => {
    dom.innerText = getErrorByIndex(Error, index);
  });
  if (Error.title || Error.country || Error.story) {
    return;
  }

  const newTimeStampValue = timeStampValue
    ? new Date(timeStampValue)
    : new Date();

  titleDom.value = "";
  countryDom.value = "";
  timeStampDom.value = "";
  storyDom.value = "";

  const data = {
    title: titleValue,
    country: countryValue,
    timeStamp: EditTimeStamp(newTimeStampValue),
    story: storyValue,
  };

  await fetch("/api", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const successUploadDom = document.getElementById("successUpload");
  const uploadInput = document.getElementById("uploadInput");

  uploadInput.style.display = "none";
  successUploadDom.style.display = "block";
};
