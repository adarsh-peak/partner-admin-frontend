import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Leftmenu from "./components/Leftmenu";
import FinancialStatement from "./pages/financialStatement";
import Home from "./pages/home/Home";
import createCustomTheme from "./theme";

function App() {
  const location = useLocation();
  const theme = createCustomTheme(false);
  const [activeTabId, setActiveTabId] = useState<string>(location?.pathname?.substring(1) || "/dashboard");

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className="w-[100vw] h-[100vh] overflow-hidden flex bg-white">
          <Leftmenu activeTabId={activeTabId} setActiveTabId={setActiveTabId} />
          <section className="bg-[#f6f6f6] root-container">
            <Routes>
              <Route
                path="/financial-statements"
                element={<FinancialStatement activeLeftMenuTabId={activeTabId} />}
              />
              <Route
                path="/"
                element={<Home activeLeftMenuTabId={activeTabId} />}
              />
              <Route
                path="*"
                element={<Home activeLeftMenuTabId={activeTabId} />}
              />

            </Routes>
          </section>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
