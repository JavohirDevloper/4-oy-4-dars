import db from '../../db/index.js';

export const showUser = async ({ id }) => {
  const user = await db('users').where({ id }).first();

  if (!user) {
    throw new Error('Not Found');
  }

  return user;
};
