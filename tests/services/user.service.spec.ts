import { createUserService, getUserByIdService } from '../../src/services/user.service';
import User from '../../src/models/user.model';

jest.mock('../../src/models/user.model');

describe('User Service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new user', async () => {
    const userMock = { id: 1, name: 'John Doe', email: 'john.doe@example.com' };
    (User.create as jest.Mock).mockResolvedValue(userMock);

    const result = await createUserService('John Doe', 'john.doe@example.com');
    expect(result).toEqual(userMock);
  });

  it('should throw an error if user creation fails', async () => {
    (User.create as jest.Mock).mockRejectedValue(new Error('Database error'));

    await expect(createUserService('John Doe', 'john.doe@example.com')).rejects.toThrow('Error creating user: Database error');
  });

  it('should fetch a user by ID', async () => {
    const userMock = { id: 1, name: 'John Doe', email: 'john.doe@example.com' };
    (User.findByPk as jest.Mock).mockResolvedValue(userMock);

    const result = await getUserByIdService(1);
    expect(result).toEqual(userMock);
  });

  it('should throw an error if user is not found', async () => {
    (User.findByPk as jest.Mock).mockResolvedValue(null);

    await expect(getUserByIdService(1)).rejects.toThrow('User not found');
  });
});