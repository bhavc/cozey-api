export const productSetItemsTable: {
	id: number;
	productSetId: number;
	productId: number;
}[] = [
	{ id: 1, productSetId: 1, productId: 1 },
	{ id: 2, productSetId: 1, productId: 2 },
	{ id: 3, productSetId: 1, productId: 3 },
	{ id: 4, productSetId: 1, productId: 4 },
	{ id: 5, productSetId: 2, productId: 5 },
	{ id: 6, productSetId: 2, productId: 6 },
	{ id: 7, productSetId: 2, productId: 7 },
	{ id: 8, productSetId: 3, productId: 8 },
	{ id: 9, productSetId: 3, productId: 9 },
	{ id: 10, productSetId: 3, productId: 10 },
];

export class ProductSetItemModel {
	productSetItemsTable: {
		id: number;
		productSetId: number;
		productId: number;
	}[];

	constructor(
		productSetItemsTable: {
			id: number;
			productSetId: number;
			productId: number;
		}[],
	) {
		this.productSetItemsTable = productSetItemsTable;
	}

	async getProductSetItems() {
		return this.productSetItemsTable;
	}

	async getProductIdsForProductSet(productSet: number) {
		return this.productSetItemsTable
			.filter((productSetItem) => productSetItem.productSetId === productSet)
			.map((products) => products.id);
	}
}
