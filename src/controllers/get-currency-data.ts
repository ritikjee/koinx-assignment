import axios from "axios";

import Currency from "../models/coin.model";

type CurrencyType = {
  id: string;
  name: string;
};

export async function getCurrencyData() {
  try {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/list?include_platform=false`
    );

    const currencies = data.map((currency: any) => {
      return {
        id: currency.id,
        name: currency.name,
      };
    });

    const currenciesinDatabase = await Currency.find();
    const array = [];

    if (currenciesinDatabase.length === 0) {
      await Currency.insertMany(currencies);
      console.log("Data inserted");
    } else {
      const [add, diff] = findDifference(currenciesinDatabase, currencies);

      if (add.length > 0) {
        await Currency.insertMany(add);
        console.log("Data inserted");
      }

      if (diff.length > 0) {
        for (let i = 0; i < diff.length; i++) {
          const currency = await Currency.findOne({ id: diff[i].id });
          currency!.name = diff[i].name;
          await currency!.save();
          array.push(currency);
        }
        console.log("Data updated");
      }
    }
  } catch (error: any) {
    console.error(error.message);
  } finally {
    console.log("Data upto date with api");
  }
}

function findDifference(arr1: CurrencyType[], arr2: CurrencyType[]) {
  let add = [];
  let diff = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i].id < arr2[j].id) {
      diff.push(arr1[i]);
      i++;
    } else if (arr1[i].id > arr2[j].id) {
      add.push(arr2[j]);
      j++;
    } else {
      i++;
      j++;
    }
  }

  while (j < arr2.length) {
    add.push(arr2[j]);
    j++;
  }

  while (i < arr1.length) {
    diff.push(arr1[i]);
    i++;
  }

  return [add, diff];
}
