import moment from "moment";

export const formatDate = (hour: string) => {
  const format = "DD/MM/YYYY • HH:mm:ss";
  return moment(hour).format(format);
};