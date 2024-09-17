// src/controllers/user.controller.ts
import { Request, Response, NextFunction  } from 'express';
import User from '../models/user.model';
import sequelize from '../config/database';

export class UserController {
  async createUser(req: Request, res: Response, next: NextFunction) {
    const { name, email } = req.body;
    const transaction = await sequelize.transaction();
    try {
      // Use the transaction object `t` to perform database operations within the transaction scope
      const newUser = await User.create({ name, email }, { transaction: transaction });
      await transaction.commit();
      res.status(201).json(newUser);
    } catch (error: any) {
      if (error.name === 'SequelizeValidationError') {
        // Return a 400 status code and the error message
        return res.status(400).json({
          error: {
            name: "InvalidRequestBody",
            message: error.errors.map((err: any) => err.message),
          },
        });
      } else if (error.name === "SequelizeUniqueConstraintError") {
        return res.status(400).json({
          error: {
            name: "UniqueConstraintError",
            message: error.errors.map(p => p.message)
          },
        });
      }
      
      // Pass other errors to the default error handler
      next(error);
    }
  }
}
