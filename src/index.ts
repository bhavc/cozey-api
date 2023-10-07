import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import qs from "qs";

import { WorkflowRouter } from "./workflows/router";

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
	app.use("/workflow", WorkflowRouter);

	app.listen(port, () => {
		console.info(`[server]: Server is running at http://localhost:${port}`);
	});
})();
