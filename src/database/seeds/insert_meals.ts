import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletar todas as entradas da seed
    await knex("meals").del();

    // Insira as entradas para a seed popular a tabela
    await knex("meals").insert([
        { name: "Manga", description: "Manga com Sal", is_diet: true, user_id: 1  },
        { name: "Óleo de S10", description: "Óleo de Pickap 2014", is_diet: false, user_id: 1},
        { name: "Morango do Amor", description: "Morango mais famoso das américas", is_diet: false, user_id: 1 },
        { name: "Abacate com leite em pó", description: "Abacate lendário com leite", is_diet: true, user_id: 2}
    ]);
};
