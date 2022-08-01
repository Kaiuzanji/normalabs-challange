import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaUserRepository } from './../../../repositories/prisma/prismaUserRepository'
import { CreateUserUseCase } from './../../../use-cases/createUserUseCase'
export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const { body: { name, email, image, password } } = req
  const prismaUserRepository = new PrismaUserRepository()
  const createUserUseCase = new CreateUserUseCase(prismaUserRepository)
  await createUserUseCase.execute({
    name: name,
    email: email,
    image: image,
    password: password
  })
  .then(() => res.status(201).json({ message: 'User created with success!' }))
  .catch( err => res.status(404).json({ message: err.toString() }))  
}