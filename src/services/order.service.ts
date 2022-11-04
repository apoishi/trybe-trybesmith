import OrderModel from '../models/order.model';
import { IOrder } from '../interfaces/IOrder';

// Requirement 04
export default class OrderService {
  public order = new OrderModel();

  async getAll(): Promise<IOrder[]> {
    const orders = await this.order.getAll();
    return orders;
  }
}