import { User, Meals } from "../types/types"
import { knex } from "../knex";
import type { FastifyRequest, FastifyReply } from "fastify";


export async function Create_User(request: FastifyRequest, reply: FastifyReply) {
  const { name } = request.body as User

  await knex("users").insert({ name })

  return reply.status(201).send({
    message: "Usuário criado com sucesso!"
  })
}

export async function Metrics(request: FastifyRequest, reply: FastifyReply) {
  const { user_id } = request.params as Meals

  const meals = (await knex("meals").select().where({ user_id }).orderBy("id"))

  let contador = 0
  let sequence = 0
  meals.forEach(meal => {
    if (meal.is_diet == 1) {
      contador++
      if (contador > sequence) {
        sequence = contador
      }
    } else {
      if (contador > sequence) {
        sequence = contador
        contador = 0
      }
      contador = 0
    }
  });

  const total = meals.length

  const isDiet = (await knex("meals").select().where({ is_diet: 1, user_id })).length

  const noDiet = total - isDiet

  return reply.status(201).send({ totalRefeicoes: total, totalRefeicoesDieta: isDiet, totalRefeicoesForaDieta: noDiet, melhorSequencia: sequence })
}

export async function AllMealsUser(request: FastifyRequest, reply: FastifyReply) {
  const { user_id } = request.params as Meals

  const meals = await knex("meals").select().where({ user_id }).orderBy("id")

  return reply.status(201).send(meals)
}