import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Leftmenu from "./components/Leftmenu";
import Home from "./pages/home/Home";
import createCustomTheme from "./theme";

function App() {
  const theme = createCustomTheme(false);
  
  const [activeTabId, setActiveTabId] = useState<string>(
    "relation"
  );
  
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className="w-[100vw] h-[100vh] overflow-hidden flex bg-white">
          <Leftmenu activeTabId={activeTabId} setActiveTabId={setActiveTabId} />
          <section className="bg-[#f6f6f6] root-container">
            <Home activeLeftMenuTabId={activeTabId} />
          </section>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
