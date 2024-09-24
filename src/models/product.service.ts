import Errors, { HttpCode, Message } from "../libs/Error";
import { Product, ProductInput } from "../libs/types/product";
import ProductModel from "../schema/Product.model";

class ProductService {
  private readonly productmodel;

  constructor() {
    this.productmodel = ProductModel;
  }

  /**  SPA */

  /** SSR */

  public async createNewProduct(input: ProductInput): Promise<Product> {
    try {
      return await this.productmodel.create(input);
    } catch (err) {
      console.log("Error.module: createNewProduct:", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }
}

export default ProductService;
