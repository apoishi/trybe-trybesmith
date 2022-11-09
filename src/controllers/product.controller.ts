import { Request, Response } from 'express';
import ProductService from '../services/product.service';
import { statusCodes } from '../utils/statusCode';

export default class ProductController {
  public productService = new ProductService();

  async create(req: Request, res: Response) {
    const product = req.body;

    const productCreated = await this.productService.create(product);
    res.status(statusCodes.CREATED).json(productCreated);
  }

  async getAll(_req: Request, res: Response) {
    const products = await this.productService.getAll();
    res.status(statusCodes.OK).json(products);
  }
}