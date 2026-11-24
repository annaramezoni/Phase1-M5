import mongoose from "mongoose";
import data from "./data.json" with { type: "json" };

//Connect to db
const db = mongoose.connect("mongodb://localhost:27017/mydatabase");

//Import models
import AuctionItem from "./models/auction-items.js";

//Seed Auction Items
const seedAuctionItems = () => {
  AuctionItem.insertMany(data)
    .then(() => console.info(`Seeded ${data.length} items`))
    .catch((err) => console.error(err.message))
    .finally(() => mongoose.connection.close());
};

//Clear/Delete all Auction Items
const clearAuctionItems = () => {
  AuctionItem.deleteMany({})
    .then((result) => console.info(`Deleted ${result.deletedCount} items`))
    .catch((err) => console.error(err.message))
    .finally(() => mongoose.connection.close());
};

//Add auction items
const addAuctionItem = (item) => {
  AuctionItem.create(item)
    .then(() => console.info("New Item Added"))
    .catch((err) => console.error(err.message))
    .finally(() => mongoose.connection.close());
};
//Find auction items
const findAuctionItems = (title) => {
  //Make case insensitive
  const search = new RegExp(title, "i");
  AuctionItem.find({ $or: [{ title: search }, { description: search }] })
    .then((items) => {
      console.info(items);
      console.info(`${items.length} matches`);
    })
    .catch((err) => console.error(err.message))
    .finally(() => mongoose.connection.close());
};

//Update Auction Item
const updateAuctionItem = (_id, updates) => {
  AuctionItem.updateOne({ _id }, updates)
    .then(() => console.info("Item updated"))
    .catch((err) => console.error(err.message))
    .finally(() => mongoose.connection.close());
};

//Removee Auction Item
const removeAuctionItem = (_id) => {
  AuctionItem.deleteOne({ _id })
    .then(() => console.info("Item deleted"))
    .catch((err) => console.error(err.message))
    .finally(() => mongoose.connection.close());
};

//List All Items
const listAuctionItems = () => {
  AuctionItem.find()
    .then((items) => {
      console.info(items);
      console.info(`${items.length} items`);
    })
    .catch((err) => console.error(err.message))
    .finally(() => mongoose.connection.close());
};

// Export all methods
export {
  seedAuctionItems,
  clearAuctionItems,
  addAuctionItem,
  findAuctionItems,
  updateAuctionItem,
  removeAuctionItem,
  listAuctionItems,
};
