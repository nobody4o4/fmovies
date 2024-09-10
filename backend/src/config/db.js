import mongoose from "mongoose";

export default async function db() {
  try {
    await mongoose.connect(
      `mongodb+srv://nobodyy404:asdfghjkl@cluster404.5peflop.mongodb.net/fmovies`
    );
    console.log("connected to DB.");
  } catch (e) {
    console.log("Failed to connect DB");
  }
}
