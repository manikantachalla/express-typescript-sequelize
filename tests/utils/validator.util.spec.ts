import { body, validationResult } from 'express-validator';

export const userValidationRules = () => [
  body('name').isString().withMessage('Name must be a string'),
  body('email').isEmail().withMessage('Email must be a valid email address'),
];

export const validate = (req: any, res: any, next: any) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  res.status(400).json({ errors: errors.array() });
};
