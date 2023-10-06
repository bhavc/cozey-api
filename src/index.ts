import express from "express";
import dotenv from "dotenv";

import bodyParser from "body-parser";
import qs from "qs";

dotenv.config();

const app = express();
const port = process.env.PORT;

(async () => {
	// app.use(express.urlencoded({ extended: false }));
	// app.use(express.json());
	app.set("query parser", (str: string) => {
		return qs.parse(str);
	});

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));

	app.get("/", (_, res) => {
		res.send("Express + TypeScript Server");
	});

	app.listen(port, () => {
		console.info(`[server]: Server is running at http://localhost:${port}`);
	});
})();
