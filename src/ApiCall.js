import { useState, useEffect } from "react";

export const ApiCall = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true"
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return data;
};

//export default ApiCall;
