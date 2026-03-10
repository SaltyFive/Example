import z from "zod";
import { publicProcedure, router } from "../trpc";

type User = {
  username:string,
  password:string,
}

const users:User[] = []

async function addUser(user:User) {
  users.push(user)
  console.log(users)
}

async function getUsers():Promise<User[]> {
  return users
}

export const authRouter = router({
  
})