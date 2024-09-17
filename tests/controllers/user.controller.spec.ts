import { Request, Response } from 'express';
import { UserController } from '../../src/controllers/user.controller';
import User from '../../src/models/user.model';

jest.mock('../../src/models/user.model');

describe('User Controller', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let userController : UserController = new UserController();

  beforeEach(() => {
    req = {
      body: { name: 'John Doe', email: 'john.doe@example.com' },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new user and return status 201', async () => {
    (User.create as jest.Mock).mockResolvedValue(req.body);
    await userController.createUser(req as Request, res as Response);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(req.body);
  });

  it('should return status 500 when there is an error', async () => {
    (User.create as jest.Mock).mockRejectedValue(new Error('Error creating user'));
    await userController.createUser(req as Request, res as Response);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Error creating user' });
  });
});