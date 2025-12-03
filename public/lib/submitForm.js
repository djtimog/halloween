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
import { renderStatusCard } from "../script/dom/renderUploadCard.js";

export const SubmitForm = async (formData, Error) => {
  const statusCardDom = document.getElementById("statusCard");
  const uploadInput = document.getElementById("uploadInput");

  validateForm(Error, formData);
  ErrorDom.forEach((dom, index) => {
    dom.innerText = getErrorByIndex(Error, index);
  });

  if (Error.title || Error.country || Error.story) {
    return;
  }

  const newTimeStampValue = formData.timeStamp
    ? new Date(formData.timeStamp)
    : new Date();

  const data = {
    ...formData,
    timeStamp: EditTimeStamp(newTimeStampValue),
  };

  const result = await fetch("/api", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!result.ok) {
    uploadInput.style.display = "none";
    statusCardDom.style.display = "block";
    renderStatusCard("failed");
    return;
  }

  titleDom.value = "";
  countryDom.value = "";
  timeStampDom.value = "";
  storyDom.value = "";

  uploadInput.style.display = "none";
  statusCardDom.style.display = "block";
  renderStatusCard("success");
};
