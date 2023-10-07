import { Request, Response } from "express";

// import { productsTable, productSetTable } from "../db";

import { WorkflowsService } from "./service";
// import { ProductService } from "../products/service";

export class WorkflowController {
	async GetPickItems(req: Request, res: Response) {
		try {
			const workflowService = new WorkflowsService();
		} catch (err) {}
	}
}
