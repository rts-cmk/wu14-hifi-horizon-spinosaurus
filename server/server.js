import cors from "cors";
import express from "express";
import fs from "fs";

const PORT = 6767;

const app = express();

app.use(cors());

app.get("/products", (req, res) => {
	fs.readFile("data.json", "utf-8", (err, data) => {
		if (err) {
			return res.json({ error: "den kan ikke læse indholdet dawg" });
		}
		const superData = JSON.parse(data);
		res.send(superData);
	});
});

app.get(`/product/:id`, (req, res) => {
	const ID = req.params.id;
	fs.readFile("data.json", "utf-8", (err, data) => {
		if (err) {
			return res.json({ error: "fejl på ID fetch" });
		}
		const superData = JSON.parse(data);

		const findId = superData.products.findIndex(
			(products) => products.id == ID,
		);

		if (findId == -1) {
			return res.json({ err: "fejl på id" }).status(404);
		}

		const product = superData.products[findId];

		res.send(product);
	});
});

app.listen(PORT, () => {
	console.log("server er startet");
});
