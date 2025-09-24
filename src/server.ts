import fastify from "fastify";
import { Create_User, Metrics, AllMealsUser } from "./database/controlers/user_controler";
import { UpdateMeal, CreateMeal, ListMeal, DeleteMeal } from "./database/controlers/meals_controler";

const app = fastify()


// Cria usuário
app.post('/user', Create_User)

// Cria uma refeição
app.post('/meals', CreateMeal)

// Listar todas refeições de 1 usuário
app.get('/user/meals/:user_id', AllMealsUser)

// Listar 1 refeicao
app.get('/meals/:id', ListMeal)

// Atualiza uma refeição
app.put('/meals/:id/:user_id', UpdateMeal)

// Deleta uma refeição
app.delete('/meals/:id/:user_id', DeleteMeal)

// Lista métricas
app.get('/user/:user_id/metrics', Metrics)

// Ouvido do servidor
app.listen({ port: 3333 }).then(() => {
  console.log("HTTP servidor prestando")
})