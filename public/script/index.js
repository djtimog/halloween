import { Header } from "./dom/header.js";
import { Footer } from "./dom/footer.js";

const headerDom = document.getElementById("header");
const footerDom = document.getElementById("footer");

headerDom.innerHTML = Header(location.pathname);
footerDom.innerHTML = Footer();
