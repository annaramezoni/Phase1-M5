import mongoose from "mongoose";

async function connectToDB() {
  mongoose.connect("mongodb://localhost:27017/mydatabase").catch((err) =>
    console.error({
      message: "MongoDB connection error",
      error: err.message,
    }),
  );
}

export default connectToDB;
