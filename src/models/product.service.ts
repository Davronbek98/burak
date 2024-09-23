import ProductModel from "../schema/Product.model";

class ProductService {
  private readonly productmodel;

  constructor() {
    this.productmodel = ProductModel;
  }
}

export default ProductService;
