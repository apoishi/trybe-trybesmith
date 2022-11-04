import jsonwebtoken from 'jsonwebtoken';
import { IUser, IUserID } from '../interfaces';
import UserModel from '../models/user.model';

// Requirement 03
export default class UsersService {
  public user = new UserModel();

  public jwt = jsonwebtoken;

  public async create(userData: IUser) {
    const user = await this.user.create(userData);
    if (user) return this.generateToken(user);
  }

  public generateToken(user: IUserID) {
    const payload = { id: user.id, username: user.username }; 
    return this.jwt.sign( 
      payload, 
      process.env.JWT_SECRET as string,
      { algorithm: 'HS256', expiresIn: '1d' },
    );
  }
}