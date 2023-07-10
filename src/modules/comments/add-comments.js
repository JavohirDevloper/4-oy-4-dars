import db from "../../db/index.js";

export const addComment = async (payload) =>{
    const result = await db('comments').insert(payload).returning('*');
    return result[0]
}