/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    {
      // id: 1,
      name: 'Eric Clemmons',
    },
    {
      // id: 2,
      name: 'Stephen Haberman',
    },
    {
      // id: 3,
      name: 'John Doe',
    },
    {
      // id: 4,
      name: 'Mr Bean',
    },
  ]);
};

