export function goBacktoUpload() {
  const statusCardDom = document.getElementById("statusCard");
  const uploadInput = document.getElementById("uploadInput");

  uploadInput.style.display = "block";
  statusCardDom.style.display = "none";
  //.replaceChildren();
}
