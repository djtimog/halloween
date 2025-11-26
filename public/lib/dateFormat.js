export const EditTimeStamp = (date) => {
  const [hour, minute] = [date.getHours(), date.getMinutes()];
  const newHour = hour > 12 ? 24 - hour : hour;
  const timeSuffix = hour > 12 ? "PM" : "AM";

  const newMinute =
    minute == 0 ? "00" : minute.length === 1 ? `0${minute}` : minute;
  return `${date.toDateString()} by ${newHour}:${newMinute}${timeSuffix}`;
};
