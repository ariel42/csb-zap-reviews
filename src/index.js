import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//if real elements file are commented in index.html, load them here for development
if (typeof ZapReviewsElement === "undefined") {
  import("./zap-reviews");
}
if (typeof ZapScoreElement === "undefined") {
  import("./zap-score");
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
