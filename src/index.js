import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

if (typeof ZapReviewsElement === "undefined") {
  const script = document.createElement("script");
  script.src = `${location.origin}/zap-reviews.js?${Math.random()}`;
  document.body.appendChild(script);
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
