/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('comments').del();
  await knex('comments').insert([
    {
      // id: 1,
      post_id: 1,
      user_id: 3,
      text: "There's a simple reason why adding and removing print statements to debug is categorically wrong: You shouldn't have to modify a program to be able to debug it, because then it's no longer the same program.",
    },
    {
      // id: 2,
      post_id: 2,
      user_id: 4,
      text: "I've mostly abandoned that ORM to focus on https://vlcn.io but I'm free to discuss how the ORM works, how to build a query planner and optimizer, how to optimize query plans for different backends, etc.",
    },
  ]);
};

