import z from "zod";
import { publicProcedure, router } from "../trpc";

type User = {
  id:number
  username:string,
  password:string,
}

type InputUser = {
  username:string,
  password:string,
}

let id = 0
const users:User[] = []

async function addUser(user:InputUser) {
  const newUser:User = {
    id: ++id,
    username: user.username,
    password: user.password
  }
  users.push(newUser)
  console.log(users)
}

async function getUsers():Promise<User[]> {
  return users
}

export const authRouter = router({

})