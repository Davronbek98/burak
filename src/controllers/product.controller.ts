import { Request, Response } from "express";
import Errors, { HttpCode, Message } from "../libs/Error";
import { T } from "../libs/types/common";
import ProductService from "../models/Product.service";
import { AdminRequest } from "../libs/types/member";
import { ProductInput } from "../libs/types/product";

const productService = new ProductService();

const productController: T = {};
/**  SPA */

/** SSR */
productController.getAllProduct = async (req: Request, res: Response) => {
  try {
    console.log("getAllProduct");
    res.render("products");
  } catch (err) {
    console.log("Error,getAllProduct:", err);
    if (err instanceof Errors) res.status(err.code).json();
    else res.status(Errors.standart.code).json(Errors.standart);
  }
};

productController.creatNewProduct = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("creatNewProduct");
    if (!req.files?.length)
      throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);

    const data: ProductInput = req.body;
    data.productImages = req.files?.map((ele) => {
      return ele.path;
    });
    console.log("data:", data);

    await productService.createNewProduct(data);

    res.send(
      `<script> alert("Successful creation!" ); window.location.replace('admin/product/all') </script>`
    );
  } catch (err) {
    console.log("Error,creatNewProduct:", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert("${message}" ); window.location.replace('admin/product/all') </script>`
    );
  }
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
  try {
    console.log("updateChosenProduct");
  } catch (err) {
    console.log("Error,updateChosenProduct:", err);
    if (err instanceof Errors) res.status(err.code).json();
    else res.status(Errors.standart.code).json(Errors.standart);
  }
};
export default productController;
