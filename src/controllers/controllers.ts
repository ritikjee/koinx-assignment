import { Request, Response } from "express";

import axios from "axios";

export async function compareCurrencies(req: Request, res: Response) {
  try {
    const { fromCurrency, toCurrency, date } = req.body;

    if (!fromCurrency || !toCurrency || !date) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const regex = /^\d{1,2}-(0[1-9]|1[0-2])-\d{4}$/;

    if (!regex.test(date)) {
      return res.status(400).json({ message: "Invalid date format" });
    }

    const [toCurrencyData, fromCurrencyData] = await Promise.all([
      axios.get(
        `https://api.coingecko.com/api/v3/coins/${toCurrency}/history?date=${date}&localization=false`
      ),
      axios.get(
        `https://api.coingecko.com/api/v3/coins/${fromCurrency}/history?date=${date}&localization=false`
      ),
    ]);

    const price =
      fromCurrencyData.data.market_data.current_price.usd /
      toCurrencyData.data.market_data.current_price.usd;

    return res.status(200).json({ price });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export async function getCompanyHoldingCurrencies(req: Request, res: Response) {
  try {
    const { currency } = req.body;

    if (!currency) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/companies/public_treasury/${currency}`
    );

    return res.status(200).json({
      companies: data.companies,
    });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ message: "Coin not supported" });
  }
}
