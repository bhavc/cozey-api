export const productSetsTable: {
	id: number;
	name: "Valentines" | "Birthday" | "ClientGift";
}[] = [
	{ id: 1, name: "Valentines" },
	{ id: 2, name: "Birthday" },
	{ id: 3, name: "ClientGift" },
];

export class ProductSetsModel {
	productSetTable: { id: number; name: string }[];

	constructor(productSetTable: { id: number; name: string }[]) {
		this.productSetTable = productSetTable;
	}

	async getProductSets() {
		return this.productSetTable;
	}
}
