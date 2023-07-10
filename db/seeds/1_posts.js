/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('posts').del();
  await knex('posts').insert([
    {
      // id: 1,
      title: 'Is print debugging good enough?',
      content: "Let's debate debugging techniques!",
      user_id: 1,
    },
    {
      // id: 2,
      title: 'The ORMazing show',
      content:
        'Nick & KBall sit down with the brilliant Stephen Haberman to discuss all things ORMs',
      user_id: 2,
    },
  ]);
};

