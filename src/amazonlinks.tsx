import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import AmazonLinksPage from "./pages/amazonlinks"
import { ThemeProvider } from "./components/app/theme-provider"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AmazonLinksPage />
    </ThemeProvider>
  </StrictMode>
)
