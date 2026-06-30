import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router";
import "./index.css"; // Styles

// Hooks
import ScrollToTop from "./common/ScrollTop.tsx";

// Routes
import App from "./routes/App.tsx";
import Documentation from "./routes/documentation/Documentation.tsx";
import GetStarted from "./routes/get-started/GetStarted.tsx";
import SignUp from "./routes/sign-up/SignUp.tsx";
import Submit from "./routes/submit/Submit.tsx";
import Layout from "./routes/Layout.tsx";
import { VisualCodespace } from "./routes/visual-codespace/VisualCodespace.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      {/* Hooks */}
      <ScrollToTop />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/admin-panel" element={<App />} />
          <Route path="/visual-codespace" element={<VisualCodespace />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
);
