import mongoose from "mongoose";

interface currenctAttrs {
  id: string;
  name: string;
}

const currenctSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Currency = mongoose.model("Currency", currenctSchema);

export default Currency;
