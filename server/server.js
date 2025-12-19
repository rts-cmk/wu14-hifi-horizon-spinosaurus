import cors from "cors";
import express from "express";
import data from "./data.json" with { type: "json" };
import morgan from "morgan";

const PORT = 6767;

const app = express();
app.use(morgan());
app.use(cors());

app.get("/products", (req, res) => {
  res.send(data);
});

app.get(`/product/:id`, (req, res) => {
  const ID = req.params.id;
  const findId = data.products.findIndex((products) => products.id == ID);

  if (findId == -1) {
    return res.json({ err: "fejl på id" }).status(404);
  }

  const product = data.products[findId];

  res.send(product);
});

app.listen(PORT, () => {
  console.log("server er startet");
});
