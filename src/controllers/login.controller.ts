import { Request, Response } from 'express';
import LoginService from '../services/login.service';
import { statusCodes } from '../utils/statusCode';

export default class LoginController {
  public loginService = new LoginService();

  public async createLogin(req: Request, res: Response) {
    const loginBody = req.body;
    const token = await this.loginService.createLogin(loginBody);
    res.status(statusCodes.OK).json({ token });
  }
}
