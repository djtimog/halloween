import path from "path";

export const getContentType = (url) => {
  const ext = path.extname(url).toLowerCase().replace(".", "");
  const contentTypes = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    json: "application/json",
    txt: "text/plain",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    gif: "image/gif",
    svg: "image/svg+xml",
    webp: "image/webp",
    ico: "image/x-icon",
  };
  return contentTypes[ext] || "application/octet-stream";
};
