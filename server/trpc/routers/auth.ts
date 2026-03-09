import z from "zod";
import { publicProcedure, router } from "../trpc";

type User = {
  username:string,
  password:string,
}

async function printUser(user:User) {
  console.log(`你好啊，${user.username}`)
}

async function getUsers():Promise<User[]> {
  const F = {username:'Franklin',password:'maasdf'}
  const M = {username:'Micheal',password:'kjhjk'}
  const T = {username:'Trevor',password:'kjsadf'}
  return [F,M,T]
}

export const authRouter = router({

})