import AuctionItem from "../models/auctionItems.js";

export const getItems = async (req, res) => {
  try {
    const { search } = req.query;
    const filter = {};

    if (search) {
      const escaped = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); //It protects the search from interpreting user input as regular expression instructions. It also helps prevent users from accidentally or intentionally creating expensive regular expression patterns.
      const regex = new RegExp(escaped, "i");
      filter.$or = [{ title: regex }, { description: regex }];
    }

    const items = await AuctionItem.find(filter);
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
