import express from "express";
import db from "./src/config/db.js";
import mainRouter from "./src/main.route.js";
import cors from "cors";

const port = process.env.PORT || 3000;
const app = express();

db();

app.use(cors());

app.use(express.json());

app.use("/api", mainRouter);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
