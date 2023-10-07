// Data should not be pulling from here in a real application
import type { ProductBoxType } from "./products/types";
// import { ProductItem } from "./products/models";

// TODO: rename date to date placed

// line items, new entry for each one
// id number

export const ordersTable: {
	id: number;
	productSetId: number;
	orderDate: number;
	shippingAddress: string;
}[] = [
	{ id: 1, productSetId: 1, orderDate: 1, shippingAddress: "some palce" },
	{ id: 2, productSetId: 1, orderDate: 1, shippingAddress: "some palce" },
	{ id: 3, productSetId: 1, orderDate: 1, shippingAddress: "some palce" },
	{ id: 4, productSetId: 1, orderDate: 1, shippingAddress: "some palce" },
	{ id: 5, productSetId: 1, orderDate: 1, shippingAddress: "some palce" },
	{ id: 6, productSetId: 2, orderDate: 1, shippingAddress: "some palce" },
	{ id: 7, productSetId: 2, orderDate: 1, shippingAddress: "some palce" },
	{ id: 8, productSetId: 3, orderDate: 1, shippingAddress: "some palce" },
	{ id: 9, productSetId: 3, orderDate: 1, shippingAddress: "some palce" },
	{ id: 10, productSetId: 3, orderDate: 1, shippingAddress: "some palce" },
	{ id: 11, productSetId: 3, orderDate: 1, shippingAddress: "some palce" },
];

export const orderItemTable: {
	id: number;
	orderId: number;
	productSetId: number;
}[] = [];

export const productSetTable: {
	id: number;
	name: ProductBoxType;
}[] = [
	{ id: 1, name: "Valentines" },
	{ id: 2, name: "Birthday" },
	{ id: 3, name: "ClientGift" },
];
