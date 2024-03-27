import { Schema, model } from "mongoose";

const ProductSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "please enter product name"],
    },

    quantity: {
      type: Number,
      requred: true,
      default: 0,
    },
    price: {
      type: Number,
      requred: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = model("Product",ProductSchema)
export default Product
