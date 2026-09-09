import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import GridfinityPage from "./pages/gridfinity"
import { ThemeProvider } from "./components/app/theme-provider"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <GridfinityPage />
    </ThemeProvider>
  </StrictMode>
)
