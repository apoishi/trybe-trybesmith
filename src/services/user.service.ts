// import jsonwebtoken from 'jsonwebtoken';
import { IUser } from '../interfaces';
import UserModel from '../models/user.model';
import generateToken from '../utils/jwt';
import validateSchema from '../validations/validateSchema';
import { userSchema } from '../validations/schema';

// Requirement 03
export default class UsersService {
  public user = new UserModel();

  public async create(userData: IUser) {
    await validateSchema(userSchema, userData);
    const user = await this.user.create(userData);
    const token = generateToken(user);
    return token;
  }
}
