import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.
    createTable("meals", (table) => {
        table.bigIncrements("id").primary().index()
        table.text("name").notNullable().index(),
        table.text("description").notNullable(),
        table.boolean("is_diet").notNullable(),
        table.timestamp("date").defaultTo(knex.fn.now())
        table.integer("user_id").notNullable().references("id").inTable("users")
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("meals")
}

