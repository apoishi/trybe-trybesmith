import OrderModel from '../models/order.model';
import { IOrder } from '../interfaces/IOrder';
import ProductModel from '../models/product.model';
import validateSchema from '../validations/validateSchema';
import { orderSchema } from '../validations/schema';
// Requirement 04
export default class OrderService {
  public order = new OrderModel();

  public products = new ProductModel();

  async getAll(): Promise<IOrder[]> {
    const orders = await this.order.getAll();
    return orders;
  }

  async create(userId: number, productsIds: number[]) {
    await validateSchema(orderSchema, { productsIds });

    const orderId = await this.order.create(userId);
    const insertSaleId = productsIds.map(async (productId) => {
      await this.products.insertOrderId(orderId, productId);
    });
    await Promise.all(insertSaleId);

    return { userId, productsIds };
  }
}