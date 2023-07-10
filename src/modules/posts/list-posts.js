import db from '../../db/index.js';

export const listPosts = ({ filter = {} } = {}) => {
  return db('posts').where(filter).select('*');
};
