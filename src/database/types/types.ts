interface User {
  id: number,
  name: string,
  created_at: Date
}

interface Meals {
  id: number,
  name: string,
  description: string,
  is_diet: boolean,
  date: Date,
  user_id: number
}

export { User, Meals }