import { Request, Response, NextFunction } from 'express';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization'];

  if (token) {
    // Replace this with real authentication logic
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};
