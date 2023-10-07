export const productsTable: { id: number; name: string }[] = [
	{
		id: 1,
		name: "Red Roses Bouquet",
	},
	{
		id: 2,
		name: "Box of Chocolates",
	},
	{
		id: 3,
		name: "Love card",
	},
	{
		id: 4,
		name: "Womens Perfume",
	},
	{
		id: 5,
		name: "Birthday cupcake",
	},
	{
		id: 6,
		name: "$100 Visa Gift Card",
	},
	{
		id: 7,
		name: "Birthday card",
	},
	{
		id: 8,
		name: "Bottle of wine",
	},
	{
		id: 9,
		name: "Fruit basket",
	},
	{
		id: 10,
		name: "Pen",
	},
];

export class ProductModel {
	productsTable: { id: number; name: string }[];

	constructor(productsTable: { id: number; name: string }[]) {
		this.productsTable = productsTable;
	}

	async getProducts() {
		return this.productsTable;
	}

	async getProductByProductId(id: number) {
		return this.productsTable.find((product) => product.id == id);
	}

	async getProductsByProductIds(ids: number[]) {
		return this.productsTable.filter(
			(product) => product.id === ids.find((id) => id === product.id),
		);
	}
}
