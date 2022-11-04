import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IProduct, IProductID } from '../interfaces';
import mysql from './connection';

// Requirement 01
export default class ProductModel {
  private connection = mysql;

  public async create(productData: IProduct): Promise<IProductID> {
    const { name, amount } = productData;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...productData };
  }

  // Requirement 02
  public async getAll(): Promise<IProductID[]> {
    const [result] = await this.connection
      .execute<IProductID[] & RowDataPacket[]>('SELECT * FROM Trybesmith.Products');
 
    return result;
  }
}