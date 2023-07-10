import db from '../../db/index.js';

export const listComments = ({ filter = {} } = {}) => {
  return db('comments').where(filter).select('*');
};
