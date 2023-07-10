import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const showPost = async ({ id }) => {
  const post = await db('posts').where({ id }).first();

  if (!post) {
    throw new NotFoundError('Post not found');
  }

  return post;
};
