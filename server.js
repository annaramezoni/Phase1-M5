import express from "express";
import connectToDB from "./src/config/dbConnect.js";
import routes from "./src/routes/index.js";

connectToDB();

const app = express();
const PORT = 3000;

app.use("/api", routes);
app.get("/", (req, res) => {
  res.send("Auction API is running");
});

app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
