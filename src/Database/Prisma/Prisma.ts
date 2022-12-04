import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export class PrismaExample {

    async createUser() {
        await prisma.user.create({
            data: {
                name: 'Alice',
                email: 'alice@prisma.io',
                posts: {
                    create: { title: 'Hello World' },
                },
                profile: {
                    create: { bio: 'I like turtles' },
                },
            },
        })
    }



    async getUsers() {
        const allUsers = await prisma.user.findMany({
            include: {
              posts: true,
              profile: true,
            },
          });
          return allUsers;

    }



}