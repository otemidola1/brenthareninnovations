'use server'

import { auth } from "@/auth"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { z } from "zod"

const RoomSchema = z.object({
    name: z.string().min(1, "Name is required"),
    type: z.string().optional(),
    price: z.coerce.number().min(0, "Price must be positive"),
    capacity: z.coerce.number().int().min(1, "Capacity must be at least 1"),
    description: z.string().optional(),
    isAvailable: z.boolean().default(true),
})

function isAdmin(session: any) {
    return session?.user?.role === "ADMIN"
}

export async function createRoom(formData: FormData) {
    const session = await auth()
    if (!isAdmin(session)) return { error: "Unauthorized" }

    const validated = RoomSchema.safeParse({
        name: formData.get("name"),
        type: formData.get("type"),
        price: formData.get("price"),
        capacity: formData.get("capacity"),
        description: formData.get("description"),
        isAvailable: formData.get("isAvailable") === "on",
    })

    if (!validated.success) {
        return { error: validated.error.issues[0].message }
    }

    await db.room.create({
        data: validated.data,
    })

    revalidatePath("/admin/rooms")
    return { success: "Room created successfully" }
}

export async function updateRoom(roomId: string, formData: FormData) {
    const session = await auth()
    if (!isAdmin(session)) return { error: "Unauthorized" }

    const validated = RoomSchema.safeParse({
        name: formData.get("name"),
        type: formData.get("type"),
        price: formData.get("price"),
        capacity: formData.get("capacity"),
        description: formData.get("description"),
        isAvailable: formData.get("isAvailable") === "on",
    })

    if (!validated.success) {
        return { error: validated.error.issues[0].message }
    }

    await db.room.update({
        where: { id: roomId },
        data: validated.data,
    })

    revalidatePath("/admin/rooms")
    return { success: "Room updated successfully" }
}

export async function deleteRoom(roomId: string) {
    const session = await auth()
    if (!isAdmin(session)) return { error: "Unauthorized" }

    await db.room.delete({
        where: { id: roomId },
    })

    revalidatePath("/admin/rooms")
    return { success: "Room deleted successfully" }
}
