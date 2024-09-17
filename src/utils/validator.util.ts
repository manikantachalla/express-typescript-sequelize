import { body, validationResult } from 'express-validator';

export const userValidationRules = () => [
  body('name')
    .notEmpty()
    .withMessage('Name is required') // Check for presence
    .isString()
    .withMessage('Name must be a string'), // Check if the value is a string
  body('email')
    .notEmpty()
    .withMessage('Email is required') // Check for presence
    .isEmail()
    .withMessage('Email must be a valid email address'),
];


export const validate = (req: any, res: any, next: any) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  res.status(400).json({ errors: errors.array() });
};
