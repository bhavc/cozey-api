import express from "express";
import { WorkflowController } from "./controller";

export const WorkflowRouter = express.Router();
const workflowController = new WorkflowController();

WorkflowRouter.get("/getPickItems", workflowController.GetPickItems);
WorkflowRouter.get("/getPackItems", workflowController.GetPackItems);
