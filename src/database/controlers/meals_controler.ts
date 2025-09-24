import { Meals } from "../types/types"
import { knex } from "../knex";
import type { FastifyRequest, FastifyReply } from "fastify";

export async function UpdateMeal(request: FastifyRequest, reply: FastifyReply) {
    const { id, user_id } = request.params as Meals
    const { name } = request.body as Meals
  
    await knex("meals").update({ name }).where({ id, user_id })
  
    return reply.status(201).send({
      message: "Refeição atualizada com sucesso!"
    })
}

export async function CreateMeal(request: FastifyRequest, reply: FastifyReply) {
  const { name, description, is_diet, user_id } = request.body as Meals
   
  await knex("meals").insert({ name, description, is_diet, user_id })
  return reply.status(201).send({
    message: "Refeição adicionada com sucesso"
  })
}

export async function ListMeal(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as Meals

  const meals = await knex("meals").select().where({ id }).orderBy("id")

  return reply.status(201).send(meals)
}

export async function DeleteMeal(request: FastifyRequest, reply: FastifyReply) {
  const { id, user_id } = request.params as Meals

  await knex("meals").delete().where({ id, user_id })

  return reply.status(201).send({
    message: "Refeição deletada com sucesso!"
  })
}
