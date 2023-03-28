import { useState } from "react";
import "./styles.css";

export default function App() {
  const [theme, setTheme] = useState(sessionStorage.getItem("theme"));
  const [customerId, setCustomerId] = useState(
    sessionStorage.getItem("customerId")
  );
  const [siteId, setSiteId] = useState(sessionStorage.getItem("siteId"));

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
            sessionStorage.setItem("theme", e.target.value);
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
            sessionStorage.setItem("siteId", e.target.value);
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
            sessionStorage.setItem("customerId", e.target.value);
            setCustomerId(e.target.value);
          }}
        />
      </div>
      <div>
        <zap-reviews
          isTest="true"
          theme={theme}
          customer-id={customerId}
          site-id={siteId}
        ></zap-reviews>{" "}
      </div>
    </>
  );
}
