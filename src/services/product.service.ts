import { IProduct, IProductID } from '../interfaces/IProduct';
import ProductModel from '../models/product.model';
import validateSchema from '../validations/validateSchema';
import { productSchema } from '../validations/schema';

// Requirement 01
export default class ProductService {
  public product = new ProductModel();

  public async create(productData: IProduct): Promise<IProductID> {
    await validateSchema(productSchema, productData);
    return this.product.create(productData);
  }

  // Requirement 02
  public async getAll(): Promise<IProductID[]> {
    const products = await this.product.getAll();
    return products;
  }
}