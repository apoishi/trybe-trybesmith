import { Request, Response } from 'express';
import UsersService from '../services/user.service';
import { statusCodes } from '../utils/statusCode';
// Requirement 03
export default class UserController {
  public userService = new UsersService();

  async create(req: Request, res: Response) {
    const user = req.body;

    const token = await this.userService.create(user);
    res.status(statusCodes.CREATED).json({ token });
  }
}
