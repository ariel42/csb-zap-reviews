import { useState } from "react";
import "./styles.css";

function ZapReviews() {
  const [theme, setTheme] = useState(sessionStorage.getItem("reviews-theme"));
  const [customerId, setCustomerId] = useState(
    sessionStorage.getItem("reviews-customerId")
  );
  const [siteId, setSiteId] = useState(sessionStorage.getItem("reviews-siteId"));

  return (
    <>
      <h1>Zap Reviews</h1>
      <div>
        <label htmlFor="theme">Theme:</label> &nbsp;
        <input
          name="theme"
          id="theme"
          type="text"
          value={theme}
          onChange={(e) => {
            sessionStorage.setItem("reviews-theme", e.target.value);
            setTheme(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="siteId">Site:</label> &nbsp;
        <select
          name="siteId"
          id="siteId"
          onChange={(e) => {
            sessionStorage.setItem("reviews-siteId", e.target.value);
            setSiteId(e.target.value);
          }}
          value={siteId}
          defaultValue=""
        >
          <option value="" disabled hidden>
            נא לבחור אתר
          </option>
          <option value="5">דפי זהב</option>
          <option value="3">רסט</option>
          <option value="2">מתחתנים</option>
        </select>
      </div>
      <div>
        <label htmlFor="customerId">Zap Customer Id:</label> &nbsp;
        <input
          name="customerId"
          id="customerId"
          type="text"
          value={customerId}
          onChange={(e) => {
            sessionStorage.setItem("reviews-customerId", e.target.value);
            setCustomerId(e.target.value);
          }}
        />
      </div>
      <div>
        <zap-reviews
          isDev="true"
          theme={theme}
          customer-id={customerId}
          site-id={siteId}
        ></zap-reviews>
      </div>
    </>
  );
}

function ZapScores() {
  const [theme, setTheme] = useState(sessionStorage.getItem("score-theme"));
  const [customerId, setCustomerId] = useState(
    sessionStorage.getItem("score-customerId")
  );
  const [siteId, setSiteId] = useState(sessionStorage.getItem("score-siteId"));

  return (
    <>
      <h1>Zap Score</h1>
      <div>
        <label htmlFor="theme">Theme:</label> &nbsp;
        <input
          name="theme"
          id="theme"
          type="text"
          value={theme}
          onChange={(e) => {
            sessionStorage.setItem("score-theme", e.target.value);
            setTheme(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="siteId">Site:</label> &nbsp;
        <select
          name="siteId"
          id="siteId"
          onChange={(e) => {
            sessionStorage.setItem("score-siteId", e.target.value);
            setSiteId(e.target.value);
          }}
          value={siteId}
          defaultValue=""
        >
          <option value="" disabled hidden>
            נא לבחור אתר
          </option>
          <option value="5">דפי זהב</option>
          <option value="3">רסט</option>
        </select>
      </div>
      <div>
        <label htmlFor="customerId">Zap Customer Id:</label> &nbsp;
        <input
          name="customerId"
          id="customerId"
          type="text"
          value={customerId}
          onChange={(e) => {
            sessionStorage.setItem("score-customerId", e.target.value);
            setCustomerId(e.target.value);
          }}
        />
      </div>
      <div>
        <zap-score
          isDev="true"
          theme={theme}
          customer-id={customerId}
          site-id={siteId}
        ></zap-score>
      </div>
    </>
  );
}

export default function App() {
  return (
    <>
      <ZapReviews></ZapReviews>
      <ZapScores></ZapScores>
    </>
  )
}