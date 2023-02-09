
import Topbar from "./scenes/global/Topbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard"
import Sidebar from "./scenes/global/Sidebar"
import Team from "./scenes/team"


function App() {
  const [theme, colorMode] = useMode();
 

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar/>
      
          <main className="content">
            <Topbar /> 
            <Routes>
                <Route path="/" element={<Dashboard />}/>
                <Route path="/team" element={<Team />}/>
                

            </Routes> 
          
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;