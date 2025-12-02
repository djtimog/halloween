import { goBacktoUpload } from "../../lib/backToUpload.js";

export function renderStatusCard(status = "pending") {
  const renderData = () => {
    if (status === "success") {
      return {
        icon: "✔️",
        message: "Your Story was Sent Successfully",
        buttonMessage: "Click to write and send more Story",
        color: "green",
        innerButtonText: "Go Back",
      };
    } else if (status === "failed") {
      return {
        icon: "❌",
        message: "Upload Failed",
        buttonMessage:
          "Your story was rejected because it is not scary enough!",
        color: "red",
        innerButtonText: "Try Again",
      };
    }
    return {
      icon: "⚠️",
      message: "Something went wrong!",
      buttonMessage: "Try Again",
      color: "orange",
      innerButtonText: "Try Again",
    };
  };

  const { icon, message, buttonMessage, color, innerButtonText } = renderData();

  const container = document.getElementById("statusCard");
  const card = document.createElement("div");
  card.className = "card";
  container.replaceChildren(card);
  const cardIcon = document.createElement("div");
  cardIcon.innerHTML = icon;
  cardIcon.className = "card-icon";
  cardIcon.style.color = color;
  const cardMessage = document.createElement("p");
  cardMessage.innerText = message;
  cardMessage.style.color = color;
  cardMessage.className = "card-message";
  const cardButtonMessage = document.createElement("p");
  cardButtonMessage.innerText = buttonMessage;
  cardButtonMessage.className = "card-buttonmessage";
  const cardButton = document.createElement("button");
  cardButton.innerText = innerButtonText;
  cardButton.type = "button";
  cardButton.id = "cardButton";
  cardButton.className = "card-button";
  cardButton.addEventListener("click", goBacktoUpload);
  card.appendChild(cardIcon);
  card.appendChild(cardMessage);
  card.appendChild(cardButtonMessage);
  card.appendChild(cardButton);

  return container;
}
