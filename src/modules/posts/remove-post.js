import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const removePost = async ({ id }) => {
  const post = await db('posts').where({ id }).first();

  if (!post) {
    throw new NotFoundError('Post not found');
  }

  return (await db('posts').where({ id }).delete().returning('*'))[0];
};
