import { SubmitForm } from "../lib/submitForm.js";

const submitButtonDom = document.getElementById("submitButton");

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

export const formStatus = {};

submitButtonDom.addEventListener("click", async () => await SubmitForm(Error));
