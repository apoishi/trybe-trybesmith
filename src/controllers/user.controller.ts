import { Request, Response } from 'express';
import UserService from '../services/user.service';

// Requirement 03
export default class UserController {
  public userService = new UserService();

  async create(req: Request, res: Response) {
    const user = req.body;

    const token = await this.userService.create(user);
    res.status(201).json({ token });
  }
}