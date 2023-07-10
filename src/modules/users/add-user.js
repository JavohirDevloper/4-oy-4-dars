import db from '../../db/index.js';

export const addUser = async (payload) => {
  return db('users').insert(payload).returning('*');
};
