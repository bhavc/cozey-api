// customer name
// customer email
// line items

export const ordersTable: {
	id: number;
	orderDate: number;
	orderTotal: number;
	shippingAddress: string;
	customerName: string;
	customerEmail: string;
}[] = [
	{
		id: 1,
		orderDate: 1,
		orderTotal: 24.5,
		shippingAddress: "some palce",
		customerName: "John smith",
		customerEmail: "johnsmith@gmail.com",
	},
	{
		id: 2,
		orderDate: 1,
		orderTotal: 24.5,
		shippingAddress: "some palce",
		customerName: "John smith",
		customerEmail: "johnsmith@gmail.com",
	},
	{
		id: 3,
		orderDate: 1,
		orderTotal: 24.5,
		shippingAddress: "some palce",
		customerName: "John smith",
		customerEmail: "johnsmith@gmail.com",
	},
	{
		id: 4,
		orderDate: 1,
		orderTotal: 24.5,
		shippingAddress: "some palce",
		customerName: "John smith",
		customerEmail: "johnsmith@gmail.com",
	},
	{
		id: 5,
		orderDate: 1,
		orderTotal: 24.5,
		shippingAddress: "some palce",
		customerName: "John smith",
		customerEmail: "johnsmith@gmail.com",
	},
	{
		id: 6,
		orderDate: 1,
		orderTotal: 24.5,
		shippingAddress: "some palce",
		customerName: "John smith",
		customerEmail: "johnsmith@gmail.com",
	},
	{
		id: 7,
		orderDate: 1,
		orderTotal: 24.5,
		shippingAddress: "some palce",
		customerName: "John smith",
		customerEmail: "johnsmith@gmail.com",
	},
	{
		id: 8,
		orderDate: 2,
		orderTotal: 24.5,
		shippingAddress: "some palce",
		customerName: "John smith",
		customerEmail: "johnsmith@gmail.com",
	},
	{
		id: 9,
		orderDate: 2,
		orderTotal: 24.5,
		shippingAddress: "some palce",
		customerName: "John smith",
		customerEmail: "johnsmith@gmail.com",
	},
	{
		id: 10,
		orderDate: 2,
		orderTotal: 24.5,
		shippingAddress: "some palce",
		customerName: "John smith",
		customerEmail: "johnsmith@gmail.com",
	},
	{
		id: 11,
		orderDate: 2,
		orderTotal: 24.5,
		shippingAddress: "some palce",
		customerName: "John smith",
		customerEmail: "johnsmith@gmail.com",
	},
];

export class OrdersModel {
	ordersTable: { id: number; orderDate: number; shippingAddress: string }[];

	constructor(
		ordersTable: { id: number; orderDate: number; shippingAddress: string }[],
	) {
		this.ordersTable = ordersTable;
	}

	async getOrders() {
		return this.ordersTable;
	}

	async getOrdersByDate(date: number) {
		return this.ordersTable.filter((order) => order.orderDate === date);
	}
}
