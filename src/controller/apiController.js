import AuctionItem from "../models/auctionItems.js";

export const getItems = async (req, res) => {
  try {
    const { search } = req.query;
    const filter = {};

    if (search) {
      const escaped = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(escaped, "i");
      filter.$or = [{ title: regex }, { description: regex }];
    }

    const items = await AuctionItem.find(filter);
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
