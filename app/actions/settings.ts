'use server'

import { auth } from "@/auth"
import { db } from "@/lib/db"
import { compare, hash } from "bcrypt"
import { z } from "zod"

const ChangePasswordSchema = z.object({
    oldPassword: z.string().min(1, "Old password is required"),
    newPassword: z.string().min(6, "New password must be at least 6 characters"),
})

export async function changePassword(formData: FormData) {
    const session = await auth()
    if (!session?.user?.email) {
        return { error: "Unauthorized" }
    }

    const oldPassword = formData.get("oldPassword") as string
    const newPassword = formData.get("newPassword") as string

    const parsed = ChangePasswordSchema.safeParse({ oldPassword, newPassword })
    if (!parsed.success) {
        return { error: parsed.error.issues[0].message }
    }

    const user = await db.user.findUnique({
        where: { email: session.user.email },
    })

    if (!user) {
        return { error: "User not found" }
    }

    const passwordsMatch = await compare(oldPassword, user.password)
    if (!passwordsMatch) {
        return { error: "Incorrect old password" }
    }

    const hashedPassword = await hash(newPassword, 12)

    await db.user.update({
        where: { id: user.id },
        data: { password: hashedPassword },
    })

    return { success: "Password updated successfully" }
}
