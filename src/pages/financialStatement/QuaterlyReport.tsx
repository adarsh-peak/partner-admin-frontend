import Number from "../../components/Number";
import CustomizedTables from "../../components/Table";
import {
  getAllPartnershipsQuaterlyReportData,
  getRowsDataFromQuaterlyReport,
} from "../../utils/common";
import { getFormattedDate, getPeriodFromEventDate } from "../../utils/date";

type Props = {
  data: object;
  quaterlyReports: object[];
};

const QuaterlyReport = ({ data, quaterlyReports }: Props) => {
  const headings = [
    { id: "Subject", name: "Subject" },
    {
      id: "PTD",
      name: "Account",
      align: "right",
      renderer: (data: string) => <Number value={data} />,
    },
    {
      id: "TPTD",
      name: "Entire Fund",
      align: "right",
      renderer: (data: string) => <Number value={data} />,
    },
    {
      id: "ITD",
      name: "Account",
      align: "right",
      renderer: (data: string) => <Number value={data} />,
    },
    {
      id: "TITD",
      name: "Entire Fund",
      align: "right",
      renderer: (data: string) => <Number value={data} />,
    },
  ];

  const rowsList = [
    { id: "Committed_Capital", name: "Comitted Capital" },
    { id: "Open_Capital_Account", name: "Opening Capital Account" },
    { id: "Capital_Contribution", name: "Capital Contribution" },
    { id: "Operating_Income", name: "Operating Income (Loss)" },
    { id: "Investment_Gain_Realized", name: "Realized Investment Gain (Loss)" },
    {
      id: "Investment_Gain_Unrealized",
      name: "Unrealized Investment Gain (Loss)",
    },
  ];

  const topHeadings = [
    { id: "-", name: "", colSpan: 1 },
    {
      id: "first",
      name: `For the ${
        getPeriodFromEventDate(quaterlyReports?.SummaryFStmtRS?.[0]?.EventDate) || "period"
      } ended ${getFormattedDate(quaterlyReports?.SummaryFStmtRS?.[0]?.EventDate)}`,
      colSpan: 2,
      align: "right",
    },
    {
      id: "second",
      name: `For inception through ${getFormattedDate(data?.EventDate)}`,
      colSpan: 2,
      align: "right",
    },
  ];

  return (
    <CustomizedTables
      headings={headings}
      rows={
        data?.Fund === "All Partnerships"
          ? getAllPartnershipsQuaterlyReportData(
              quaterlyReports?.SummaryFStmtRS
            )
          : getRowsDataFromQuaterlyReport(data)
      }
      topHeadings={topHeadings}
    />
  );
};

export default QuaterlyReport;
