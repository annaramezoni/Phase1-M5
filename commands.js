import { Command } from "commander";
import inquirer from "inquirer";
const program = new Command();
import {
  seedAuctionItems,
  clearAuctionItems,
  addAuctionItem,
  findAuctionItems,
  updateAuctionItem,
  removeAuctionItem,
  listAuctionItems,
} from "./index.js";

const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of the auction item:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter the description of the auction item:",
  },
  {
    type: "input",
    name: "start_price",
    message: "Enter the starting price of the auction item:",
    validate: (v) => !isNaN(parseFloat(v)) || "Please enter a number",
  },
  {
    type: "input",
    name: "reserve_price",
    message: "Enter the reserve price of the auction item:",
    validate: (v) => !isNaN(parseFloat(v)) || "Please enter a number",
  },
];

program.version("1.0.0").description("Auction Management System");

program
  .command("seed")
  .alias("s")
  .description("Seed the database")
  .action(() => seedAuctionItems());

program
  .command("clear")
  .alias("c")
  .description("Clear/delete all items from the database")
  .action(() => clearAuctionItems());

// program
//   .command("add <title> <description> <start_price> <reserve_price>")
//   .alias("a")
//   .description("Add an item to be auctioned")
//   .action((title, description, startPrice, reservePrice) => {
//     addAuctionItem(title, description, startPrice, reservePrice);
//   });

program
  .command("add")
  .alias("a")
  .description("Add an item to be auctioned")
  .action(() => {
    inquirer.prompt(questions).then((answers) => addAuctionItem(answers));
  });

program
  .command("find <title>")
  .alias("f")
  .description("Find an item")
  .action((title) => findAuctionItems(title));

program
  .command("update <_id>")
  .alias("u")
  .description("Update an item to be auctioned")
  .action((_id) => {
    inquirer
      .prompt(questions)
      .then((answers) => updateAuctionItem(_id, answers));
  });

program
  .command("remove <_id>")
  .alias("r")
  .description("Remove Item")
  .action((_id) => removeAuctionItem(_id));

program
  .command("list")
  .alias("l")
  .description("List all items")
  .action(() => listAuctionItems());

program.parse(process.argv);
