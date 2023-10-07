import { OrdersModel, ordersTable } from "../orders/model";
import { OrderItemsModel, orderItemsTable } from "../orderItems/model";
import {
	ProductSetItemModel,
	productSetItemsTable,
} from "../productsetitems/model";
import { ProductModel, productsTable } from "../products/model";

const ordersModel = new OrdersModel(ordersTable);
const orderItemsModel = new OrderItemsModel(orderItemsTable);
const productSetItemsModel = new ProductSetItemModel(productSetItemsTable);
const productsModel = new ProductModel(productsTable);

export class WorkflowsService {
	async getPickItemsForDay(date: number) {
		const ordersForDate = await ordersModel.getOrdersByDate(date);
		const orderIds = ordersForDate.map((orders) => orders.id);
		const orderItemsByOrderIds =
			await orderItemsModel.getOrderItemsByOrderIds(orderIds);

		// for each productset, get all the items that map to that product set and get the result
		const pickItemsForDay: Record<number, { count: number; name: string }> = {};
		for (let i = 0; i < orderItemsByOrderIds.length; i++) {
			const orderItem = orderItemsByOrderIds[i];
			const productSetId = orderItem.productSetId;
			const productsInProductSet =
				await productSetItemsModel.getProductIdsForProductSet(productSetId);
			const productsByProductIds =
				await productsModel.getProductsByProductIds(productsInProductSet);

			for (let j = 0; j < productsByProductIds.length; j++) {
				const product = productsByProductIds[j];
				if (product.id in pickItemsForDay) {
					pickItemsForDay[product.id]["count"] += 1;
				} else {
					pickItemsForDay[product.id] = {
						count: 1,
						name: product.name,
					};
				}
			}
		}

		return pickItemsForDay;
	}

	async getPackingItems() {
		const packingItems = [];
		const orders = await ordersModel.getOrders();

		// this ends up being what should be in "orders.json"
		for (let i = 0; i < orders.length; i++) {
			let newOrderFE: Record<string, number | string | any[]> = {};

			const order = orders[i];

			newOrderFE = { ...order };

			const orderItemsForOrder = await orderItemsModel.getOrderItemsByOrderId(
				order.id,
			);

			const lineItems = [];
			for (let j = 0; j < orderItemsForOrder.length; j++) {
				let newOrderItems = {};
				const orderItem = orderItemsForOrder[j];
				newOrderItems = { ...orderItem };

				const productSetId = orderItem.productSetId;
				const productsInProductSet =
					await productSetItemsModel.getProductIdsForProductSet(productSetId);
				const productsByProductIds =
					await productsModel.getProductsByProductIds(productsInProductSet);
				const productNames = productsByProductIds.map(
					(product) => product.name,
				);
				newOrderItems = { ...orderItem, productNames };
				lineItems.push(newOrderItems);
			}
			newOrderFE.lineItems = lineItems;
			packingItems.push(newOrderFE);
		}

		return packingItems;
	}
}
