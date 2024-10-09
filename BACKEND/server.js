import express from "express";
import mongoose from "mongoose";
import Article from "./models/blog.js";
import dotenv from "dotenv";
const app = express();
app.use(express.json());

dotenv.config();

const port = 3000;
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("db conect");
}

app.get("/artical", (req, res) => {
  const artical = new Article({
    title: "hello world",
    body: "this is my body",
  });
  artical.save().then((result) => {
    res.send(result);
  });
});

app.post("/artical", (req, res) => {
  const artical = new Article({
    title: req.body.title,
    body: req.body.body,
  });

  artical.save().then((result) => {
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
