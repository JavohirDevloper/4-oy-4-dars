import db from '../../db/index.js';

export const removeUser = async ({ id }) => {
  const user = await db('users').where({ id }).first();

  if (!user) {
    throw new NotFoundError('User not found');
  }

  return (await db('users').where({ id }).delete().returning('*'))[0];
};
