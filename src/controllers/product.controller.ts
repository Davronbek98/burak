import { Request, Response } from "express";
import Errors from "../libs/Error";
import { T } from "../libs/types/common";
import ProductService from "../models/product.service";

const productService = new ProductService();

const productController: T = {};

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

productController.creatNewProduct = async (req: Request, res: Response) => {
  try {
    console.log("creatNewProduct");
  } catch (err) {
    console.log("Error,creatNewProduct:", err);
    if (err instanceof Errors) res.status(err.code).json();
    else res.status(Errors.standart.code).json(Errors.standart);
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
