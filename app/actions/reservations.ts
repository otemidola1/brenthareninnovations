'use server'

import { db } from "@/lib/db"
import { auth } from "@/auth"
import { revalidatePath } from "next/cache"
import { z } from "zod"

const createReservationSchema = z.object({
    roomId: z.string(),
    startDate: z.string().transform((str) => new Date(str)),
    endDate: z.string().transform((str) => new Date(str)),
})

export async function createReservation(formData: FormData) {
    const session = await auth()
    if (!session?.user?.id) {
        return { message: "You must be logged in to book a room." }
    }

    const rawData = {
        roomId: formData.get("roomId"),
        startDate: formData.get("startDate"),
        endDate: formData.get("endDate"),
    }

    const result = createReservationSchema.safeParse(rawData)

    if (!result.success) {
        return { message: "Invalid data provided." }
    }

    const { roomId, startDate, endDate } = result.data

    if (endDate <= startDate) {
        return { message: "End date must be after start date." }
    }

    // Check availability
    const existingReservation = await db.reservation.findFirst({
        where: {
            roomId,
            OR: [
                {
                    startDate: { lte: endDate },
                    endDate: { gte: startDate }
                }
            ]
        }
    })

    if (existingReservation) {
        return { message: "Room is already booked for these dates." }
    }

    try {
        await db.reservation.create({
            data: {
                roomId,
                userId: session.user.id,
                startDate,
                endDate,
                status: 'CONFIRMED' // Auto-confirm for now
            }
        })
    } catch (e) {
        return { message: "Failed to create reservation." }
    }

    revalidatePath(`/rooms/${roomId}`)
    revalidatePath('/admin') // Update dashboard stats
    return { message: "Reservation confirmed!", success: true }
}
