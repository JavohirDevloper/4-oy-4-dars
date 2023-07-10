import db from "../../db/index.js";
import { NotFoundError } from '../../shared/errors/index.js';

export const editComments = async ({ id, ...changes }) => {
  const comments = await db("comments").where({ id }).first();
  if (!comments) {
    throw new NotFoundError("Comments not found");
  }
  return (await db("comments").where({ id }).update(changes).returning("*"))[0];
};
