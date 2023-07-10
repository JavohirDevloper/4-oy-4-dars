import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const showPost = async ({ id }) => {
  const comment = await db('comments').where({ id }).first();

  if (!comment) {
    throw new NotFoundError('Comments not found');
  }

  return comment;
};
