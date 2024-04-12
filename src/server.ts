import dotenv from "dotenv";
import express from "express";

import {
  compareCurrencies,
  getCompanyHoldingCurrencies,
} from "./controllers/controllers";
import { getCurrencyData } from "./controllers/get-currency-data";
import { connect } from "./lib/db";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8080;

app.post("/compare-currencies", compareCurrencies);
app.post("/get-company", getCompanyHoldingCurrencies);

(async () => {
  connect()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    })
    .then(() => {
      getCurrencyData();
      setInterval(async () => {
        await getCurrencyData();
      }, 3600000);
    })
    .catch((error: any) => {
      console.error(error.message);
    });
})();
