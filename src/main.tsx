// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
// import GlobalStyle from "./GlobalStyle.ts";
// import "./index.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  background-color: #f5f5f5;
}
`;

const theme = {
  pageBackground: "#fff",
};

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </BrowserRouter>
  // </StrictMode>
);
