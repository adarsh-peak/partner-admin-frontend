import moment from 'moment';

export const getFormattedDate = (dateStr: string) => {
  try {
    if (dateStr) return moment(dateStr).format("D MMMM, YYYY");
    else return "-";
  } catch (error) {
    return "";
  }
};