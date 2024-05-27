import { Router } from "express";
import { prisma } from "../../prisma/db";

const userRouter = Router();

userRouter.get("/users", async (_req, res) => {
  const allUsers = await prisma.user.findMany();
  res.send(allUsers);
});

export { userRouter };
