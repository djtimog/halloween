import { storyContainer } from "./dom/storyContainer.js";

const storyContainerDom = document.getElementById("stories-container");
storyContainerDom.innerHTML = storyContainer();

const allCardStory = document.querySelectorAll(".card-story");

allCardStory.forEach((card) => {
  const story = card.querySelector(".card-story-text");
  const button = card.querySelector(".view-story");
  const isOverFlown =
    story.scrollHeight > story.clientHeight ||
    story.scrollWidth > story.clientWidth;

  if (!isOverFlown) {
    button.style.display = "none";
  }
});
