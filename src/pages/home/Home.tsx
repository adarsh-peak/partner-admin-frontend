import { useEffect, useMemo, useState } from "react";

import Card from "../../components/Card";
import Header from "../../components/Header";
import Link from "../../components/Link";
import CustomizedTables from "../../components/Table";
import { HOME_TABS } from "../../constants/common";
import api from "../../utils/api";
import { getRedirectUrlFromRecentActivity } from "../../utils/common";
import { getFormattedDate } from "../../utils/date";
import LatestReports from "./LatestReports";

type Props = {
  activeLeftMenuTabId: string;
};

const Home = ({ activeLeftMenuTabId }: Props) => {
  const [data, setData] = useState(null);
  const [activeTabId, setActiveTabId] = useState<string>("reminder");

  async function getHomeData() {
    const homeData = await api.getData("home");
    setData(homeData?.data);
  }

  useEffect(() => {
    getHomeData();
  }, []);

  const reminderTableData = useMemo(() => {
    const headings = [
      {
        id: "Subject",
        name: "Subject",
        renderer: (data: string, row: unknown) => (
          <Link value={data} redirect_url={`reminder?mid=${row?.MailingID}`} />
        ),
      },
      {
        id: "MailingDate",
        name: "Mailing Date",
        renderer: (data: str) => getFormattedDate(data),
      },
      {
        id: "DateLastViewed",
        name: "Last Viewed",
        renderer: (data: str) => getFormattedDate(data),
      },
    ];
    const rows = data?.objReminderRS;

    return { headings, rows };
  }, [data]);

  const recentActivityTableData = useMemo(() => {
    const headings = [
      {
        id: "Subject",
        name: "Subject",
        renderer: (data: string, row: unknown) => (
          <Link
            value={data}
            redirect_url={getRedirectUrlFromRecentActivity(row)}
          />
        ),
      },
      {
        id: "EventDate",
        name: "Due Date",
        renderer: (data: str) => getFormattedDate(data),
      },
      { id: "Fund", name: "Fund" },
      { id: "PortfolioCompany", name: "Portfolio Company" },
      {
        id: "MailingDate",
        name: "Mailing Date",
        renderer: (data: str) => getFormattedDate(data),
      },
      { id: "MailingTypeName", name: "Mailing Type" },
      {
        id: "DateLastViewed",
        name: "Last Viewed",
        renderer: (data: str) => getFormattedDate(data),
      },
    ];
    const rows = data?.objRS;

    return { headings, rows };
  }, [data]);

  const getDataFromId = () => {
    switch (activeTabId) {
      case "reminder":
        return reminderTableData;
      case "recent-activity":
        return recentActivityTableData;
      default:
        return { headings: [], rows: [] };
    }
  };

  const getCountFromId = (id: string) => {
    switch (id) {
      case "reminder":
        return data?.objReminderRS?.length || 0;
      case "recent-activity":
        return data?.objRS?.length || 0;
      case "fund-raising":
        return data?.objReminderRS?.length || 0;
      case "latest-report":
        return data?.objK1RS?.length + Object?.keys(data?.objFileRS || {})?.length || 0;
      default:
        return 0;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Header activeTabId={activeLeftMenuTabId} />
      <div className="p-4 flex flex-col h-full">
        <div className="grid grid-cols-3 gap-4 mb-4">
          {HOME_TABS?.map((item) => (
            <Card
              key={item?.id}
              heading={item?.name}
              count={getCountFromId(item?.id)}
              logo={item?.icon}
              backgroundColor={item?.bgColor}
              active={item?.id === activeTabId}
              onClick={() => setActiveTabId(item?.id)}
            />
          ))}
        </div>
        <div className="flex-1 bg-white">
          {activeTabId === "latest-report" ? (
            <LatestReports
              objFStmtRS={data?.objFStmtRS}
              objK1RS={data?.objK1RS}
              objSCGEK1RS={data?.objSCGEK1RS}
              bitDisplayFStmt={data?.bitDisplayFStmt}
              objFileRS={data?.objFileRS}
              HasLPK1Consent={data?.HasLPK1Consent}
              IsConsenter={data?.consentViewModel?.IsConsenter}
              objConsentersCompanyListRS={data?.consentViewModel?.objConsentersCompanyListRS}
              objConsenterListRS={data?.consentViewModel?.objConsenterListRS}
            />
          ) : (
            <CustomizedTables
              headings={getDataFromId()?.headings || []}
              rows={getDataFromId()?.rows || []}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
