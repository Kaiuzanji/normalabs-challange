import { UserRepository, UserCreateData } from "../userRepository";
import prisma from './../../lib/prisma'

export class PrismaUserRepository implements UserRepository {
    async create({ name, email, image, password }: UserCreateData) {
        await prisma.user.create({
          data: {
            name, 
            email, 
            image, 
            password
          }
      })
    }
}