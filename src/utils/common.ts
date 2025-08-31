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

export const getRedirectUrlFromLatestReportFinancialStatement = (financialStatment: any) => {
  const FundType = financialStatment?.FundType;
  const MailingID = financialStatment?.MailingID;

  if (['Open-Ended', 'Parallel', 'Feeder']?.includes(FundType)) return `scf_financial_statement?mid=${MailingID}`;
  else if (FundType === 'FOF') return `fof_financial_statement?mid=${MailingID}`;
  else return `financial_statement?mid=${MailingID}`;
}

