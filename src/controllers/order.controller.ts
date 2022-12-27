import { Request, Response } from 'express';
import OrderService from '../services/order.service';
import { statusCodes } from '../utils/statusCode';

// Requirement 04
export default class OrderController {
  public orderService = new OrderService();

  async getAll(_req: Request, res: Response) {
    const orders = await this.orderService.getAll();
    res.status(statusCodes.OK).json(orders);
  }
  
  // Requirement 08

  public async create(req: Request, res: Response): Promise<void> {
    const { productsIds, user } = req.body;
    const userId = user.id;
    const newOrder = await this.orderService.create(userId, productsIds);
    res.status(statusCodes.CREATED).json(newOrder);
  }
}