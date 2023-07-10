import db from '../../db/index.js';

export const editUser = async ({ id, ...changes }) => {
  const user = await db('users').where({ id }).first();

  if (!user) {
    throw new NotFoundError('User not found');
  }

  return (await db('users').where({ id }).update(changes).returning('*'))[0];
};
