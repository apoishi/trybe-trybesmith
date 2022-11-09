import { ILogin } from '../interfaces';
import LoginModel from '../models/login.model';
import generateToken from '../utils/jwt';
import HttpException from '../utils/http.exception';
import validateSchema from '../validations/validateSchema';
import { loginSchema } from '../validations/schema';
import { statusCodes } from '../utils/statusCode';

// Requirement 05
export default class LoginService {
  public loginModel = new LoginModel();

  public async createLogin(loginBody: ILogin) {
    await validateSchema(loginSchema, loginBody);
    const user = await this.loginModel.getUser(loginBody);

    if (user.length === 0) {
      throw new HttpException(statusCodes.UNAUTHORIZED, 'Username or password invalid');
    }
    
    const token = generateToken(loginBody);
    return token;
  }
}