import { Request, Response } from "express";

// import { productsTable, productSetTable } from "../db";

import { WorkflowsService } from "./service";
// import { ProductService } from "../products/service";

export class WorkflowController {
	async GetPickItems(req: Request, res: Response) {
		try {
			const workflowService = new WorkflowsService();
			const pickingItems = await workflowService.getPickItemsForDay(1);

			const retData = {
				message: "success",
				data: pickingItems,
			};

			return res.status(200).send(retData);
		} catch (err) {
			return res
				.status(500)
				.send("WorkflowController.GetPickItems - Error getting data");
		}
	}

	async GetPackItems(req: Request, res: Response) {
		try {
			const workflowService = new WorkflowsService();
			const packingItems = await workflowService.getPackingItems();

			const retData = {
				message: "success",
				data: packingItems,
			};

			return res.status(200).send(retData);
		} catch (err) {
			return res
				.status(500)
				.send("WorkflowController.GetPackItems - Error getting data");
		}
	}
}
