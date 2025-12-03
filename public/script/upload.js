import { SubmitForm } from "../lib/submitForm.js";

const uploadForm = document.getElementById("uploadForm");

export const titleDom = document.getElementById("title");
export const countryDom = document.getElementById("country");
export const timeStampDom = document.getElementById("timeStamp");
export const storyDom = document.getElementById("story");
export const ErrorDom = document.querySelectorAll(".error");

const Error = {
  title: "",
  country: "",
  timeStamp: "",
  story: "",
};

uploadForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formEl = event.currentTarget;
  const form = new FormData(formEl);
  const formData = {
    title: form.get("title"),
    country: form.get("country"),
    timeStamp: form.get("timeStamp"),
    story: form.get("story"),
  };
  await SubmitForm(formData, Error);
});
