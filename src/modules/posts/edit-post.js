import db from '../../db/index.js';

export const editPost = async ({ id, ...changes }) => {
  const post = await db('posts').where({ id }).first();

  if (!post) {
    throw new NotFoundError('Post not found');
  }

  return (await db('posts').where({ id }).update(changes).returning('*'))[0];
};
