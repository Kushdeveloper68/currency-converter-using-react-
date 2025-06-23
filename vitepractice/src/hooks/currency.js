import React , {useState, useEffect} from "react";

function useCurrency(currency) {
  const [data, setData] = useState("usd");

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [currency]);

  return data;
}

export default useCurrency; 