import moment from 'moment';

export const getFormattedDate = (dateStr: string) => {
  try {
    if (dateStr) return moment(dateStr).format("D MMMM, YYYY");
    else return "-";
  } catch (error) {
    return "";
  }
};


export function getPeriodFromEventDate(eventDateStr: string): string {
  const eventDate = moment(eventDateStr, moment.ISO_8601, true);

  if (!eventDate.isValid()) {
    return "Period";
  }

  const diff = 12 - Math.abs((eventDate.month() + 1 - 12) % 12);

  switch (diff) {
    case 3:
      return "Three Months";
    case 6:
      return "Six Months";
    case 9:
      return "Nine Months";
    case 0:
      return "Twelve Months";
    default:
      return "-";
  }
}

