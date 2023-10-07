// import { ProductBox } from "./models";

// import type { ProductBoxType } from "./types";

// export class ProductService {
// 	productsTable: ProductItem[];
// 	productSetTable: {
// 		id: number;
// 		name: ProductBoxType;
// 	}[];

// 	constructor(
// 		productsTable: ProductItem[],
// 		productSetTable: {
// 			id: number;
// 			name: ProductBoxType;
// 		}[],
// 	) {
// 		this.productsTable = productsTable;
// 		this.productSetTable = productSetTable;
// 	}

// 	async getAllProducts() {
// 		return this.productsTable;
// 	}

// 	async getAllProductSets() {
// 		return this.productSetTable;
// 	}

// 	async createBox(
// 		id: number,
// 		name: string,
// 		items: ProductItem[],
// 	): Promise<ProductBox> {
// 		const productBox = new ProductBox(id, name);
// 		items.forEach((item) => productBox.addItem(item));
// 		return productBox;
// 	}
// }
