import { ResultSetHeader } from 'mysql2';
import { IUser, IUserID } from '../interfaces';
import mysql from './connection';

// Requirement 03
export default class UserModel {
  private connection = mysql;

  public async create(userData: IUser): Promise<IUserID> {
    const { username, classe, level, password } = userData;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...userData };
  }
}