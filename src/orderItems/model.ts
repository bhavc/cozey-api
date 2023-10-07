// TODO fix this data in the db.

export const orderItemsTable: {
	id: number;
	orderId: number;
	productSetId: number;
	// productId: number, for individual products
	productName: string;
	price: number;
}[] = [
	{
		id: 1,
		orderId: 1,
		productSetId: 1,
		productName: "Valentines Day Box",
		price: 25,
	},
	{
		id: 2,
		orderId: 2,
		productSetId: 1,
		productName: "Valentines Day Box",
		price: 25,
	},
	{
		id: 3,
		orderId: 2,
		productSetId: 1,
		productName: "Valentines Day Box",
		price: 25,
	},
	{
		id: 4,
		orderId: 3,
		productSetId: 1,
		productName: "Valentines Day Box",
		price: 25,
	},
	{
		id: 5,
		orderId: 3,
		productSetId: 1,
		productName: "Valentines Day Box",
		price: 25,
	},
	{
		id: 6,
		orderId: 3,
		productSetId: 2,
		productName: "Birthday Box",
		price: 25,
	},
	{
		id: 7,
		orderId: 4,
		productSetId: 2,
		productName: "Birthday Box",
		price: 25,
	},
	{
		id: 8,
		orderId: 5,
		productSetId: 3,
		productName: "Client Gift",
		price: 25,
	},
	{
		id: 9,
		orderId: 6,
		productSetId: 3,
		productName: "Client Gift",
		price: 25,
	},
	{
		id: 10,
		orderId: 7,
		productSetId: 3,
		productName: "Client Gift",
		price: 25,
	},
	{
		id: 11,
		orderId: 7,
		productSetId: 3,
		productName: "Client Gift",
		price: 25,
	},
	{
		id: 12,
		orderId: 8,
		productSetId: 3,
		productName: "Client Gift",
		price: 25,
	},
];

export class OrderItemsModel {
	orderItemsTable: { id: number; orderId: number; productSetId: number }[];

	constructor(
		orderItemsTable: { id: number; orderId: number; productSetId: number }[],
	) {
		this.orderItemsTable = orderItemsTable;
	}

	async getOrderItems() {
		return this.orderItemsTable;
	}

	async getOrderItemsByOrderId(orderId: number) {
		return this.orderItemsTable.filter(
			(orderItem) => orderItem.orderId === orderId,
		);
	}

	async getOrderItemsByOrderIds(orderIds: number[]) {
		return this.orderItemsTable.filter(
			(orderItem) =>
				orderItem.orderId ===
				orderIds.find((orderId) => orderId === orderItem.orderId),
		);
	}
}
