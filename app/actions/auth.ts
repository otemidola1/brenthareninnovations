'use server'

import { db } from "@/lib/db"
import { hash } from "bcrypt"
import { z } from "zod"

const registerSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
})

export async function registerUser(formData: FormData) {
    const rawData = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
    }

    const result = registerSchema.safeParse(rawData)

    if (!result.success) {
        return { message: "Invalid input data.", success: false }
    }

    const { name, email, password } = result.data

    try {
        const existingUser = await db.user.findUnique({
            where: { email },
        })

        if (existingUser) {
            return { message: "User with this email already exists.", success: false }
        }

        const hashedPassword = await hash(password, 12)

        await db.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: 'GUEST', // Default role
            },
        })

        return { message: "Account created successfully! Please log in.", success: true }
    } catch (error) {
        console.error("Registration error:", error)
        return { message: "Failed to create account. Please try again.", success: false }
    }
}
