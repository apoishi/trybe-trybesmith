// import jsonwebtoken from 'jsonwebtoken';
import { IUser } from '../interfaces';
import UserModel from '../models/user.model';
import generateToken from '../utils/jwt';

// Requirement 03
export default class UsersService {
  public user = new UserModel();

  public async create(userData: IUser) {
    await this.user.create(userData);
    const token = generateToken(userData);
    return token;
  }
}
