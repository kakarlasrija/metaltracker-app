import "./MetalTracker.css";
// import gold from "../Images/gold.jpg";
import { Link } from "react-router-dom";
import Main from "./Main";
import api from "./API";
import axios from "axios";
import React, { useState, useEffect } from "react";

function GoldTracker() {
  const data = {
    success: true,
    baseCurrency: "INR",
    unit: "gram",
    rates: {
      AED: 0.04407632166857789,
      AUD: 0.017864399843261786,
      CAD: 0.016124293642921308,
      CNY: 0.08546673123416941,
      EUR: 0.010981738077964659,
      GBP: 0.009435616418627843,
      INR: 1,
      JPY: 1.6999555348331477,
      MXN: 0.2075225941254374,
      NZD: 0.019307363515640517,
      PA: 2726.0330866679533,
      PL: 2527.394316650449,
      RUB: 1.0777252316719201,
      SGD: 0.01595045344269004,
      USD: 0.01200139456204811,
      XAG: 64.70112305577635,
      XAU: 5460.456530963047,
    },
  };

  const [timeZone, setTimeZone] = useState("");

  useEffect(() => {
    const date = new Date();
    const options = {
      timeZoneName: "long", // Display the full time zone name
      timeZone: "America/New_York", // Set the desired time zone (e.g., America/New_York for Eastern Time)
    };

    const currentTimeZone = date.toLocaleString("en-US", options);
    setTimeZone(currentTimeZone);
  }, []);
  // const data = {
  //   method: "GET",
  //   url: "https://live-metal-prices.p.rapidapi.com/v1/latest/XAU,XAG,PA,PL,GBP,EUR,SGD,USD,INR,RUB,NZD,MXN,AED,AUD,CAD,CNY,JPY/INR/gram",
  //   headers: {
  //     "X-RapidAPI-Key": "3914948a66mshef558a7ebe15617p18b1fcjsn198fbfab50fb",
  //     "X-RapidAPI-Host": "live-metal-prices.p.rapidapi.com",
  //   },
  // };
  // try {
  //   const response = axios.request(data);
  //   console.log(response.data);
  // } catch (error) {
  //   console.error(error);
  // }

  return (
    <>
      <Main />
      <div className="center">
        <h3>Get Live Gold Price</h3>
        <h4>Hover to see the Magic !...</h4>
        <div className="search-container">
          <input
            type="text"
            name="search"
            placeholder="Search your place here!....."
            className="search-input"
          />
          <Link to="/" className="search-btn">
            <i className="fas fa-search"></i>
          </Link>
        </div>
        <div className="image">
          <img
            // src={gold}
            alt="gold"
            style={{
              width: "125px",
              height: "125px",
              objectFit: "cover",
            }}
          />
          {/* <h4> {response.headers.date}</h4> */}
          <h4>{timeZone}</h4>
          <h4> INDIA - {new Date().toLocaleString() + ""}</h4>
          <h3>Unit : Gram</h3>
          <h4>Base Currency : {data.baseCurrency} </h4>
          <h3>1 Gram = Rs {data.rates.XAU} </h3>
          <h3>10 Gram = Rs {data.rates.XAU * 10}</h3>
          <h3>1 Ounce = Rs {data.rates.XAU * 28.35}</h3>
        </div>
      </div>
    </>
  );
}

export default GoldTracker;
