import mongoose from "mongoose";

// Customer Schema auction items with the following 4 fields: title, description, start_price, reserve_price.
const AuctionItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  start_price: {
    type: Number,
    required: true,
  },
  reserve_price: {
    type: Number,
    required: true,
  },
});

// Define and export
const AuctionItem = mongoose.model("AuctionItem", AuctionItemSchema);

export default AuctionItem;
