import sanitize from "sanitize-html";

export const sanitizeData = (data) => {
  return sanitize(data, {
    allowedTags: ["b", "i", "em", "strong"],
  });
};
