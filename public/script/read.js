import { storyContainer } from "./dom/storyContainer.js";

const storyContainerDom = document.getElementById("stories-container");

async function uploadData() {
  try {
    const response = await fetch("/api");
    const parsedData = await response.json();

    storyContainerDom.innerHTML = storyContainer(parsedData);

    applyOverflowCheck();
  } catch (error) {
    console.log(error);
  }
}

await uploadData();

function applyOverflowCheck() {
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
}
