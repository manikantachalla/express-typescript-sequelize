import { userValidationRules, validate } from '../../src/utils/validator.util';
import { Request, Response, NextFunction } from 'express';
import { body, validationResult, ValidationError, Result } from 'express-validator';

// Mock the express-validator functions
jest.mock('express-validator', () => ({
  body: jest.fn().mockImplementation(() => ({
    notEmpty: jest.fn().mockReturnThis(),
    withMessage: jest.fn().mockReturnThis(),
    isString: jest.fn().mockReturnThis(),
    isEmail: jest.fn().mockReturnThis(),
  })),
  validationResult: jest.fn()
}));

describe('Validator Util', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    req = { body: {} }; // Initialize an empty request body
    res = {
      status: jest.fn().mockReturnThis(), // Mock response status
      json: jest.fn()                     // Mock response json method
    };
    next = jest.fn(); // Mock next function
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear all mocks after each test
  });

  describe('userValidationRules', () => {
    it('should define validation rules', () => {
      const rules = userValidationRules();
      expect(rules).toBeDefined();
      expect(rules.length).toBeGreaterThan(0); // Ensure that rules are present
    });
  });

  describe('validate middleware', () => {
    it('should call next if there are no validation errors', () => {
      // Type validationResult as a mock function
      (validationResult as jest.MockedFunction<typeof validationResult>).mockReturnValue({
        isEmpty: () => true,
        array: () => [],
        formatWith: jest.fn(),
        mapped: jest.fn(),
        throw: jest.fn(),
      } as unknown as Result<ValidationError>);

      validate(req as Request, res as Response, next);

      expect(next).toHaveBeenCalled(); // Check if next() is called
    });

    it('should return status 400 and errors if validation fails', () => {
      // Type validationResult as a mock function
      (validationResult as jest.MockedFunction<typeof validationResult>).mockReturnValue({
        isEmpty: () => false,
        array: () => [{ msg: 'Validation error', param: 'name', location: 'body' }],
        formatWith: jest.fn(),
        mapped: jest.fn(),
        throw: jest.fn(),
      } as unknown as Result<ValidationError>);

      validate(req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(400); // Check if status 400 is returned
      expect(res.json).toHaveBeenCalledWith({
        errors: [{ msg: 'Validation error', param: 'name', location: 'body' }]
      }); // Ensure errors are returned in response
    });
  });
});
