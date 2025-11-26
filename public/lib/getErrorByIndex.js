export const getErrorByIndex = (Error, index) => {
  if (index === 0) return Error.title;
  if (index === 1) return Error.country;
  if (index === 2) return Error.timeStamp;
  return Error.story;
};
