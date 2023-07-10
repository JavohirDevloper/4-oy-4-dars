import db from '../../db/index.js';

export const addPost = async (payload) => {
  const result = await db('posts').insert(payload).returning('*');
  return result[0];
};
