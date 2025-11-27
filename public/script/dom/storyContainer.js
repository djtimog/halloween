export const storyContainer = (storyData) => {
  let containerHtml = "";

  if (storyData.length !== 0) {
    storyData.forEach((data) => {
      const todayDate = new Date();
      const storyDate = new Date(data.timeStamp.split("by")[0]);

      const isNew = todayDate.getDate() == storyDate.getDate();

      containerHtml += `<div class="story-card">
      ${isNew ? '<p class="card-status">New</p>' : ""}
      <p class="card-subtitle">
        ${data.timeStamp} - <span class="country">${data.country}</span>
      </p>
      <h4 class="card-title">${data.title}</h4>
      <div class="card-story">
        <p class="card-story-text">
          ${data.story}
        </p>
        <button type="button" class="view-story" onclick="toggleStoryText(this)">Read More</button>
      </div>
    </div>`;
    });
  } else {
    containerHtml = `<p>TOP SCARES STORIES</p>`;
  }

  return containerHtml;
};
