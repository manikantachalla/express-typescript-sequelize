import User from '../models/user.model';

export const createUserService = async (name: string, email: string) => {
  try {
    const newUser = await User.create({ name, email });
    return newUser;
  } catch (error) {
    throw new Error('Error creating user: ' + error);
  }
};

export const getUserByIdService = async (id: number) => {
  try {
    const user = await User.findByPk(id);
    if (!user) throw new Error('User not found');
    return user;
  } catch (error) {
    throw new Error('Error fetching user: ' + error);
  }
};
