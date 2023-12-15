import axios from "axios";

// const API_KEY = process.env.RAPID_API_KEY;

export default {
  getGramsData: () =>
    axios({
      method: "GET",
      url: "https://live-metal-prices.p.rapidapi.com/v1/latest/XAU,XAG,PL,GBP,EUR,SGD,USD,INR,RUB,NZD,MXN,AED,AUD,CAD,CNY,JPY/INR/gram",
      headers: {
        "X-RapidAPI-Key": "aa683dbca3msh246b424faaa5b5cp1316bcjsn7bd81af150c4",
        "X-RapidAPI-Host": "live-metal-prices.p.rapidapi.com",
      },
    }),

  getDataId: (id) =>
    axios({
      method: "GET",
      url: "https://v1-sneakers.p.rapidapi.com/v1/sneakers/" + id,
      headers: {
        "x-rapidapi-key": "f2326766a3msh573dd850eaeab1fp181777jsnf7f3daf5cc0a",
        "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
      },
    }),

  get: (currency) =>
    axios({
      method: "GET",
      url:
        "https://live-metal-prices.p.rapidapi.com/v1/latest/GBP,EUR,SGD,USD,INR,RUB,NZD,MXN,AED,AUD,CAD,CNY,JPY/" +
        currency,
      headers: {
        "X-RapidAPI-Key": "3914948a66mshef558a7ebe15617p18b1fcjsn198fbfab50fb",
        "X-RapidAPI-Host": "live-metal-prices.p.rapidapi.com",
      },
    }),
};
