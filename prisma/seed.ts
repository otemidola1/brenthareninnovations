import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
    const password = await hash('securePass123!', 12)
    const admin = await prisma.user.upsert({
        where: { email: 'admin@brentharen.com' },
        update: {},
        create: {
            email: 'admin@brentharen.com',
            name: 'Admin User',
            password,
            role: 'ADMIN',
        },
    })

    // Seed Rooms
    const rooms = [
        {
            name: 'Deluxe Single Room',
            type: 'Single',
            price: 15000,
            description: 'A cozy room perfect for solo travelers, featuring a queen-sized bed and modern amenities.',
            isAvailable: true
        },
        {
            name: 'Executive Double Room',
            type: 'Double',
            price: 25000,
            description: 'Spacious room with a king-sized bed, sitting area, and city view.',
            isAvailable: true
        },
        {
            name: 'Presidential Suite',
            type: 'Suite',
            price: 50000,
            description: 'The ultimate luxury experience with a separate living room, kitchenette, and panoramic views.',
            isAvailable: true
        }
    ]

    for (const room of rooms) {
        await prisma.room.create({
            data: room
        })
    }

    console.log({ admin, roomsCreated: rooms.length })
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
