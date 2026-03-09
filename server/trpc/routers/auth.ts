import z from "zod";
import { publicProcedure, router } from "../trpc";

type User = {
  username:string,
  password:string,
}

async function printUser(user:User) {
  console.log(`你好啊，${user.username}`)
}

export const authRouter = router({

})