import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import activityLogo from "./assets/activity.svg";
import reminderLogo from "./assets/reminder.svg";
import reportLogo from "./assets/report.svg";
import Card from "./components/Card";
import Header from "./components/Header";
import Leftmenu from "./components/Leftmenu";
import CustomizedTables from "./components/Table";
import { DATA } from "./data";
import createCustomTheme from "./theme";
import api from "./utils/api";

function App() {
  const theme = createCustomTheme(false);
  const [data, setData] = useState(null);
  const [activeTabId, setActiveTabId] = useState<string>(
    "financial-statements"
  );

  async function getHomeData() {
    const homeData = await api.getData("home");
    setData(homeData?.data);
  }

  useEffect(() => {
    getHomeData();
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className="w-[100vw] h-[100vh] overflow-hidden flex bg-white">
          <Leftmenu activeTabId={activeTabId} setActiveTabId={setActiveTabId} />
          <section className="bg-[#f6f6f6] root-container">
            <Header activeTabId={activeTabId} />
            <div className="p-4">
              <div className="flex mb-8 justify-between">
                <Card
                  heading="Recent Activity"
                  count={12}
                  logo={activityLogo}
                  backgroundColor="bg-[#f2fbfb]"
                />
                <Card
                  heading="Whats New"
                  count={12}
                  logo={activityLogo}
                  backgroundColor="bg-[#f2fbfb]"
                />
                <Card
                  heading="Fund Raising"
                  count={12}
                  logo={activityLogo}
                  backgroundColor="bg-[#f2fbfb]"
                />
                <Card
                  heading="Reminders"
                  count={12}
                  logo={reminderLogo}
                  backgroundColor="bg-[#fff3d6]"
                />
                <Card
                  heading="Latest Reports"
                  count={12}
                  logo={reportLogo}
                  backgroundColor="bg-[#FFDED1]"
                />
              </div>
              <CustomizedTables
                headings={[
                  { id: "Subject", name: "Subject" },
                  { id: "Fund", name: "Fund" },
                  { id: "FundType", name: "FundType" },
                  { id: "EventDate", name: "EventDate" },
                ]}
                rows={DATA}
              />
            </div>
          </section>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
