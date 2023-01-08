import { useState } from "react";
import "./styles.css";

export default function App() {
  const [customerId, setCustomerId] = useState();
  const [siteId, setSiteId] = useState();

  return (
    <>
      <h1>Zap Reviews</h1>
      <div>
        <label htmlFor="customerId">Zap Customer Id:</label> &nbsp;
        <input
          name="customerId"
          id="customerId"
          type="text"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="siteId">Site:</label> &nbsp;
        <select
          name="siteId"
          id="siteId"
          onChange={(e) => setSiteId(e.target.value)}
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
        <zap-reviews customer-id={customerId} site-id={siteId}></zap-reviews>
      </div>
    </>
  );
}
