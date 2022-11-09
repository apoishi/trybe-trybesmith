import jsonwebtoken from 'jsonwebtoken';
import { ILogin, IUser } from '../interfaces';

export default function generateToken(user:IUser | ILogin) {
  const payload = { ...user };
  return jsonwebtoken.sign(
    payload, 
    process.env.JWT_SECRET as string,
    { algorithm: 'HS256', expiresIn: '1d' },
  );
}