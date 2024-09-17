import User from '../models/user.model';

export const createUser = async (name: string, email: string) => {
  return await User.create({ name, email });
};

export const findUserById = async (id: number) => {
  return await User.findByPk(id);
};

export const findAllUsers = async () => {
  return await User.findAll();
};

export const updateUser = async (id: number, name: string, email: string) => {
  const user = await User.findByPk(id);
  if (!user) throw new Error('User not found');

  user.name = name;
  user.email = email;
  return await user.save();
};

export const deleteUser = async (id: number) => {
  const user = await User.findByPk(id);
  if (!user) throw new Error('User not found');

  return await user.destroy();
};