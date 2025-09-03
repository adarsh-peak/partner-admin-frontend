import Number from "../../components/Number";
import CustomizedTables from "../../components/Table";
import { getFormattedDate, getPeriodFromEventDate } from "../../utils/date";

type Props = {};

const QuaterlyReport = ({ data }: Props) => {
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
        getPeriodFromEventDate(data?.EventDate) || "period"
      } ended ${getFormattedDate(data?.EventDate)}`,
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

  const getRows = () => {
    const rows = [];
    rowsList?.forEach((row) => {
      rows.push({
        Subject: row?.name,
        PTD: data?.[`PTD.${row?.id}`],
        TPTD: data?.[`TPTD.${row?.id}`],
        ITD: data?.[`ITD.${row?.id}`],
        TITD: data?.[`TITD.${row?.id}`],
      });
    });

    const hasNetPriorityReallocation =
      data?.["PTD.Net_Priority_Reallocation"] ||
      data?.["TPTD.Net_Priority_Reallocation"] ||
      data?.["ITD.Net_Priority_Reallocation"] ||
      data?.["TITD.Net_Priority_Reallocation"];

    if (hasNetPriorityReallocation) {
      rows.push({
        Subject: [148, 152]?.includes(data?.FundID)
          ? "SCF Merger Transfer"
          : "Fee Conversion Related",
        PTD: data?.[`PTD.Net_Priority_Reallocation`],
        TPTD: data?.[`TPTD.Net_Priority_Reallocation`],
        ITD: data?.[`ITD.Net_Priority_Reallocation`],
        TITD: data?.[`TITD.Net_Priority_Reallocation`],
      });
    }

    const hasRestructuringReallocation =
      data?.["PTD.Restructuring_Reallocation"] ||
      data?.["TPTD.Restructuring_Reallocation"] ||
      data?.["ITD.Restructuring_Reallocation"] ||
      data?.["TITD.Restructuring_Reallocation"];

    if (hasRestructuringReallocation) {
      rows.push({
        Subject: "Restructuring Reallocation",
        PTD: data?.[`PTD.Restructuring_Reallocation`],
        TPTD: data?.[`TPTD.Restructuring_Reallocation`],
        ITD: data?.[`ITD.Restructuring_Reallocation`],
        TITD: data?.[`TITD.Restructuring_Reallocation`],
      });
    }

    const hasReallocationDueToExcessFundInvestment =
      data?.["PTD.Reallocation_Due_To_Excess_Fund_Investment"] ||
      data?.["TPTD.Reallocation_Due_To_Excess_Fund_Investment"] ||
      data?.["ITD.Reallocation_Due_To_Excess_Fund_Investment"] ||
      data?.["TITD.Reallocation_Due_To_Excess_Fund_Investment"];

    if (hasReallocationDueToExcessFundInvestment) {
      rows.push({
        Subject: "Reallocation Due To Excess Fund Investment",
        PTD: data?.[`PTD.Reallocation_Due_To_Excess_Fund_Investment`],
        TPTD: data?.[`TPTD.Reallocation_Due_To_Excess_Fund_Investment`],
        ITD: data?.[`ITD.Reallocation_Due_To_Excess_Fund_Investment`],
        TITD: data?.[`TITD.Reallocation_Due_To_Excess_Fund_Investment`],
      });
    }

    rows.push({
      Subject: "Distributions",
      PTD: data?.[`PTD.Distributions`],
      TPTD: data?.[`TPTD.Distributions`],
      ITD: data?.[`ITD.Distributions`],
      TITD: data?.[`TITD.Distributions`],
    });

    const hasLPTransfer =
      data?.["PTD.LP_Transfer"] ||
      data?.["TPTD.LP_Transfer"] ||
      data?.["ITD.LP_Transfer"] ||
      data?.["TITD.LP_Transfer"];

    if (hasLPTransfer) {
      rows.push({
        Subject: "Reallocation Due To Excess Fund Investment",
        PTD: data?.[`PTD.LP_Transfer`],
        TPTD: data?.[`TPTD.LP_Transfer`],
        ITD: data?.[`ITD.LP_Transfer`],
        TITD: data?.[`TITD.LP_Transfer`],
      });
    }

    rows.push({
      Subject: "Closing Capital Account",
      PTD: data?.[`PTD.Closing_Capital_Account`],
      TPTD: data?.[`TPTD.Closing_Capital_Account`],
      ITD: data?.[`ITD.Closing_Capital_Account`],
      TITD: data?.[`TITD.Closing_Capital_Account`],
    });

    console.log("🚀 ~ getRows ~ data:", data);
    return rows;
  };

  return (
    <CustomizedTables
      headings={headings}
      rows={getRows()}
      topHeadings={topHeadings}
    />
  );
};

export default QuaterlyReport;
