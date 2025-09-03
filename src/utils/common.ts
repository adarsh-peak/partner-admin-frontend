import { QUATERLY_REPORT_ROWS_LIST } from "../constants/common";

export const getRedirectUrlFromRecentActivity = (recentActivity: any) => {
  const MailingID = recentActivity?.MailingID;
  const MailingType = recentActivity?.MailingType;

  if (MailingType === "SDist") {
    if (["Main", "Side", "Mgmt"]?.includes(recentActivity?.FundType))
      return `stock_distribution?mid=${MailingID}`;
    else if (recentActivity?.FundType === "FOF")
      return `fof_stock_distribution?mid=${MailingID}`;
    else return `scf_distribution?mid=${MailingID}`;
  } else if (MailingType === "CDist") {
    if (["Main", "Side", "Mgmt"]?.includes(recentActivity?.FundType))
      return `cash_distribution?mid=${MailingID}`;
    else if (recentActivity?.FundType === "FOF")
      return `fof_cash_distribution?mid=${MailingID}`;
    else return `scf_distribution?mid=${MailingID}`;
  } else if (MailingType === "CCall") {
    if (["Main", "Side", "Mgmt"]?.includes(recentActivity?.FundType))
      return `cash_call?mid=${MailingID}`;
    else if (recentActivity?.FundType === "FOF")
      return `fof_contribution?mid=${MailingID}`;
    else return `scf_contribution?mid=${MailingID}`;
  } else if (MailingType === "SCFPerf") {
    return `scf_performance?mid=${MailingID}`;
  } else if (MailingType === "PSDist") {
    return `scf_distribution?mid=${MailingID}`;
  } else if (["SRedemp", "CRedemp"]?.includes(MailingType)) {
    return `scf_redemption?mid=${MailingID}`;
  } else if (["Gen", "GenLP", "Parent", "FRaise"]?.includes(MailingType)) {
    return `message?mid=${MailingID}`;
  } else if (["InKind"]?.includes(MailingType)) {
    return `scf_contribution?mid=${MailingID}`;
  } else if (["Notif"]?.includes(MailingType)) {
    return `message?mid=${MailingID}&n=${recentActivity?.MailingRecipientNotificationID}`;
  } else {
    return `news?mid=${MailingID}`;
  }
};

export const getRedirectUrlFromLatestReportFinancialStatement = (
  financialStatment: any
) => {
  const FundType = financialStatment?.FundType;
  const MailingID = financialStatment?.MailingID;

  if (["Open-Ended", "Parallel", "Feeder"]?.includes(FundType))
    return `scf_financial_statement?mid=${MailingID}`;
  else if (FundType === "FOF")
    return `fof_financial_statement?mid=${MailingID}`;
  else return `financial_statement?mid=${MailingID}`;
};

export const isNullOrUndefined = (val: any) => {
  if (val === undefined || val === null) return true;
  return false;
};

export const getRowsDataFromQuaterlyReport = (data) => {
  const rows = [];
  QUATERLY_REPORT_ROWS_LIST?.forEach((row) => {
    let name = row?.name;
    const shouldAddRow =
      !isNullOrUndefined(data?.[`PTD.${row?.id}`]) ||
      !isNullOrUndefined(data?.[`TPTD.${row?.id}`]) ||
      !isNullOrUndefined(data?.[`ITD.${row?.id}`]) ||
      !isNullOrUndefined(data?.[`TITD.${row?.id}`]);
    if (row?.showIfData && !shouldAddRow) return;
    if (row?.id === "Net_Priority_Reallocation") {
      name = [148, 152]?.includes(data?.FundID)
        ? "SCF Merger Transfer"
        : "Fee Conversion Related";
    }
    rows.push({
      Subject: name,
      PTD: data?.[`PTD.${row?.id}`],
      TPTD: data?.[`TPTD.${row?.id}`],
      ITD: data?.[`ITD.${row?.id}`],
      TITD: data?.[`TITD.${row?.id}`],
    });
  });

  return rows;
};

export const getAllPartnershipsQuaterlyReportData = (data) => {
  const totalData = {};
  const rows = [];
  data?.forEach((row) => {
    QUATERLY_REPORT_ROWS_LIST?.map((item) => {
      totalData[item?.id] = {
        PTD: (totalData?.[item?.id]?.PTD || 0) + row?.[`PTD.${item?.id}`],
        ITD: (totalData?.[item?.id]?.ITD || 0) + row?.[`ITD.${item?.id}`],
      };
    });
  });

  Object.keys(totalData)?.forEach((key) => {
    const column = QUATERLY_REPORT_ROWS_LIST?.find((item) => item?.id === key);
    let name = column?.name;
    if (
      column?.showIfData &&
      totalData?.[key]?.[`PTD`] + totalData?.[key]?.[`ITD`] == 0
    ) {
      return;
    }
    if (column?.id === "Net_Priority_Reallocation") {
      name = [148, 152]?.includes(data?.FundID)
        ? "SCF Merger Transfer"
        : "Fee Conversion Related";
    }
    rows.push({
      Subject: name,
      PTD: totalData?.[key]?.[`PTD`],
      TPTD: totalData?.[key]?.[`TPTD`],
      ITD: totalData?.[key]?.[`ITD`],
      TITD: totalData?.[key]?.[`TITD`],
    });
  });

  return rows;
};
