import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//if real zap-reviews.js is commented in index.html, load it here for development
if (typeof ZapReviewsElement === "undefined") {
  import("./zap-reviews");
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
