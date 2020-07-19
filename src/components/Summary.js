import React from "react";
import { ApiCall } from "../ApiCall";

function Summary() {
  let data = ApiCall();

  return (
    <section>
      {data ? (
        <ul>
          <li>
            <strong>Active</strong> Cases: {data.activeCases}
          </li>
          <li>
            <strong>Deaths:</strong> {data.deaths}
          </li>
          <li>
            <strong>Recovered:</strong> {data.recovered}
          </li>
          <li>
            <strong>Total Cases:</strong> {data.totalCases}
          </li>
        </ul>
      ) : null}
    </section>
  );
}

export default Summary;
