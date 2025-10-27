import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx"; // ✅ use correct name & extension
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
