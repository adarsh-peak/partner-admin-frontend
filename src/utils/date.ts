import moment from 'moment';

export const getFormattedDate = (dateStr: string) => {
  try {
    return moment(dateStr).format("DD MMM'YY");
  } catch (error) {
    return "";
  }
};