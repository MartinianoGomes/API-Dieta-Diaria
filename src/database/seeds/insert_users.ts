import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        { name: "Aquila Morais" }, //id 1
        { name: "Martiniano Gomes" }, //id 2
        { name: "Cafundongo" }, //id 3
        { name: "Luiseira liseira" }, //id 4
        { name: "Mel" }, // id 5
        { name: "My caceta" }, // id 6
    ]);
};