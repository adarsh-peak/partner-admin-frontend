import { Button, Checkbox, Tab, Tabs } from "@mui/material";
import { useMemo, useState } from "react";
import Link from "../../components/Link";
import CustomizedTables from "../../components/Table";
import { getRedirectUrlFromLatestReportFinancialStatement } from "../../utils/common";
import { getFormattedDate } from "../../utils/date";

type Props = {
  objFStmtRS: unknown[];
  objFileRS: object;
  objK1RS: unknown[];
  objSCGEK1RS: unknown[];
  objConsentersCompanyListRS: unknown[];
  objConsenterListRS: unknown[];
  bitDisplayFStmt: boolean;
  HasLPK1Consent: boolean;
  currentLPK1Consent: boolean;
  IsConsenter: boolean;
  onHasLPK1ConsentChange: (val: boolean) => void;
  onSubmit: () => void;
};

const TABS = [
  {
    id: "financial-statement",
    label: "Financial Statement",
  },
  {
    id: "k-1",
    label: "K-1's",
  },
];

const LatestReports = ({
  objFStmtRS,
  objK1RS,
  objSCGEK1RS,
  bitDisplayFStmt,
  objFileRS,
  HasLPK1Consent,
  IsConsenter,
  objConsentersCompanyListRS = [],
  objConsenterListRS = [],
  onHasLPK1ConsentChange,
  onSubmit,
  currentLPK1Consent
}: Props) => {
  const consentDisclosureStatement = import.meta.env
    .VITE_K1_CONSENT_DISCLOSURE_STATEMENT;
  const [tabIndex, setTabIndex] = useState<number>(0);

  const financialTableData = useMemo(() => {
    const headings = [
      {
        id: "Subject",
        name: "Subject",
        renderer: (data: string, row: unknown) => (
          <Link
            value={data}
            redirect_url={getRedirectUrlFromLatestReportFinancialStatement(row)}
          />
        ),
      },
      {
        id: "EventDate",
        name: "Due Date",
        renderer: (data: str) => getFormattedDate(data),
      },
      { id: "Fund", name: "Fund" },
      { id: "FundType", name: "Fund Type" },
      {
        id: "MailingDate",
        name: "Mailing Date",
        renderer: (data: str) => getFormattedDate(data),
      },
    ];
    const rows = bitDisplayFStmt ? objFStmtRS : [];

    return { headings, rows };
  }, [objFStmtRS, bitDisplayFStmt]);

  const k1TableData = useMemo(() => {
    const headings = [
      { id: "MailingID", name: "Mailing ID" },
      { id: "Fund", name: "Fund" },
      { id: "Description", name: "Description" },
      { id: "TaxYear", name: "Tax Year" },
      { id: "TaxForm", name: "Tax Form" },
      {
        id: "DateViewed",
        name: "Last Viewed",
        renderer: (data: str) => getFormattedDate(data),
      },
    ];
    const rows = [...objK1RS];
    Object.keys(objFileRS || {})?.forEach((key) =>
      rows.push({ ...objFileRS[key], FileID: objFileRS[key]?.MailingFileID })
    );

    return { headings, rows };
  }, [objFileRS, objK1RS]);

  const renderData = () => {
    if (tabIndex == 0) {
      return (
        <CustomizedTables
          headings={financialTableData.headings || []}
          rows={financialTableData.rows || []}
          id={tabIndex}
          rowId={"FileID"}
        />
      );
    } else {
      if (currentLPK1Consent) {
        return (
          <CustomizedTables
            headings={k1TableData.headings || []}
            rows={k1TableData.rows || []}
            id={tabIndex}
            rowId={"FileID"}
          />
        );
      } else {
        return (
          <div className="w-full h-[calc(100%-48px)] p-4 border-t-[1px] border-gray-300 flex flex-col justify-center my-auto text-center">
            {IsConsenter ? (
              <p className="mx-auto w-[60%] h-fit">
                Peak XV Partners furnishes its Schedule K-1s in an electronic
                format via our myPeakXV dashboard. Based on new IRS guidance,
                you must affirmatively consent to receive your K-1 in this
                format. Until you consent, you and all designated users will be
                unable to view the K-1.
                <br />
                <br />
                If you are not authorized to consent on the behalf of the listed
                Limited Partners, please provide us with the appropriate contact
                at{" "}
                <a
                  className="text-blue-400"
                  href="mailto:peakxvfunds@peakxv.com"
                >
                  peakxvfunds@peakxv.com
                </a>
                .
                <br />
                <br />
                Click{" "}
                <a
                  className="text-blue-400"
                  target="_blank"
                  href={consentDisclosureStatement}
                >
                  here
                </a>{" "}
                for the full disclosure statement.
                <br />
                <br />
                If you do not wish to receive your K-1 electronically, please
                notify us at{" "}
                <a
                  className="text-blue-400"
                  href="mailto:peakxvfunds@peakxv.com"
                >
                  peakxvfunds@peakxv.com
                </a>
                .
                <br />
                <br />
              </p>
            ) : (
              <p className="mx-auto w-[60%]">
                Peak XV Partners furnishes its Schedule K-1s in an electronic
                format via our myPeakXV dashboard. Based on new IRS guidance, an
                authorized person must affirmatively consent to receive K-1s in
                this format. Peak XV Partners is working directly with the
                contact(s) listed below to obtain consent. Until that time, the
                K-1s will not be available for viewing. If you have any
                questions, please contact us at{" "}
                <a
                  className="text-blue-400"
                  href="mailto:peakxvfunds@peakxv.com"
                >
                  peakxvfunds@peakxv.com
                </a>
                .
              </p>
            )}
            {IsConsenter ? (
              <div className="w-[60%] mx-auto h-fit flex flex-col items-center">
                {objConsentersCompanyListRS?.map((item, index) => (
                  <p key={index}>{item?.["CompanyName"]}</p>
                ))}
                <div className="flex items-center mt-2 w-fit text-left m-auto  mb-4">
                  <Checkbox
                    checked={HasLPK1Consent}
                    onChange={(_, checked) => onHasLPK1ConsentChange(checked)}
                  />
                  <p className="ml-2">
                    Yes, I consent to receive electronic K-1s for the Limited
                    Partners listed above.
                  </p>
                </div>
                <Button variant="primary-v2" onClick={onSubmit}>Submit</Button>
              </div>
            ) : (
              <div className="w-[60%] mx-auto h-fit">
                <p>Authorized consenters</p>
                {objConsenterListRS?.length == 0 && <p>No consenters"</p>}
                {objConsenterListRS?.map((item, index) => (
                  <p className="my-1" key={index}>
                    {item?.["ContactName"]}
                  </p>
                ))}
              </div>
            )}
          </div>
        );
      }
    }
  };

  return (
    <div className="h-full bg-white">
      <Tabs
        value={tabIndex}
        onChange={(_, index: number) => setTabIndex(index)}
        aria-label="basic tabs example"
      >
        {TABS?.map((item) => (
          <Tab label={item?.label} id={item?.id} />
        ))}
      </Tabs>
      {renderData()}
    </div>
  );
};

export default LatestReports;
