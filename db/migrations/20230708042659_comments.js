/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable('comments', (table) => {
    table.increments('id');
    table.string('text');
    table.integer('user_id').references('id').inTable('users');
    table.integer('post_id').references('id').inTable('posts');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {};

