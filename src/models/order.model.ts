import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IOrder } from '../interfaces';
import mysql from './connection';

// Requirement 04
export default class OrderModel {
  private connection = mysql;

  async getAll(): Promise<IOrder[]> {
    const [result] = await this.connection.execute<IOrder[] & RowDataPacket[]>(
      `SELECT
      o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
      FROM Trybesmith.Orders AS o
      INNER JOIN Trybesmith.Products AS p
      ON p.orderId = o.id
      GROUP BY o.id;`,
    );
    return result;
  }
  
  async create(userId: number) {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [userId],
    );
    return insertId;
  }
}