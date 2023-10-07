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
		shippingAddress: "Address 1",
		customerName: "John smith",
		customerEmail: "johnsmith@gmail.com",
	},
	{
		id: 2,
		orderDate: 1,
		orderTotal: 24.5,
		shippingAddress: "Address 2",
		customerName: "Bob Smith",
		customerEmail: "bobsmith@gmail.com",
	},
	{
		id: 3,
		orderDate: 1,
		orderTotal: 24.5,
		shippingAddress: "Here Street",
		customerName: "Paul George",
		customerEmail: "paulGeorge@gmail.com",
	},
	{
		id: 4,
		orderDate: 1,
		orderTotal: 12.5,
		shippingAddress: "Slovenia",
		customerName: "Luka Doncic",
		customerEmail: "luka@gmail.com",
	},
	{
		id: 5,
		orderDate: 1,
		orderTotal: 14.5,
		shippingAddress: "Houston",
		customerName: "James Harden",
		customerEmail: "james@gmail.com",
	},
	{
		id: 6,
		orderDate: 1,
		orderTotal: 71.4,
		shippingAddress: "LA",
		customerName: "Lebron James",
		customerEmail: "lebron@gmail.com",
	},
	{
		id: 7,
		orderDate: 1,
		orderTotal: 432.34,
		shippingAddress: "Serbia",
		customerName: "Nikola Jokic",
		customerEmail: "jokic@gmail.com",
	},
	{
		id: 8,
		orderDate: 2,
		orderTotal: 17.12,
		shippingAddress: "Boston",
		customerName: "Jayson Tatum",
		customerEmail: "jayson@gmail.com",
	},
	{
		id: 9,
		orderDate: 2,
		orderTotal: 19.5,
		shippingAddress: "San Fran",
		customerName: "Steph Curry",
		customerEmail: "steph@gmail.com",
	},
	{
		id: 10,
		orderDate: 2,
		orderTotal: 21.1,
		shippingAddress: "DC",
		customerName: "Westbook",
		customerEmail: "russ@gmail.com",
	},
	{
		id: 11,
		orderDate: 2,
		orderTotal: 24.5,
		shippingAddress: "Cleveland",
		customerName: "Donnovan Mitchell",
		customerEmail: "Don@gmail.com",
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
