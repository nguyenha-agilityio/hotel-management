import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MarkdownEditor from "./Lazy/LazyPage.tsx";
import App from "./Suspense/SuspensePage.tsx";
import ContextPage from "./Context/ContextApp.tsx";
import AppDL from "./UseContext/App.tsx";
import UseContextPage from "./UseContext/ContextPage.tsx";
import AppError from "./ErrorBoundary/App.tsx";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
      <MarkdownEditor />
      <App />
      <ContextPage />
      <AppDL />
      <UseContextPage />
      <AppError />
  </StrictMode>
);
