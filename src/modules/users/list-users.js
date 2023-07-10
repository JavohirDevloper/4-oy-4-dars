import db from '../../db/index.js';

export const listUsers = () => {
  return db('users').where({}).select('*');
};
