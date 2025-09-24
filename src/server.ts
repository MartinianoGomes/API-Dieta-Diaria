import fastify from "fastify";
import { Create_User, Metrics, AllMealsUser } from "./database/controlers/user_controler";
import { UpdateMeal, CreateMeal, ListMeal, DeleteMeal } from "./database/controlers/meals_controler";

const app = fastify()

app.post('/user', Create_User)
app.post('/meals', CreateMeal)
app.get('/user/meals/:user_id', AllMealsUser)
app.get('/meals/:id', ListMeal)
app.put('/meals/:id/:user_id', UpdateMeal)
app.delete('/meals/:id/:user_id', DeleteMeal)
app.get('/user/:user_id/metrics', Metrics)

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP servidor prestando")
})