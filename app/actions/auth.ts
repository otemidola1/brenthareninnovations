"use server"

import { hash } from "bcryptjs"
import { db } from "@/lib/db"
import { z } from "zod"

const registerSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    password: z.string().min(6, { message: "Password must be at least 6 characters." }),
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

        const user = await db.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: 'GUEST', // Default role
            },
        })

        // NOTE: Server actions can't directly sign people in with NextAuth v5 credentials provider 
        // without a separate login flow or calling signIn (which is tricky in server actions for redirect).
        // For 'onboarding that actually works', we'll return success and let the client redirect to login
        // where they can easily sign in. 
        // Or we could try calling signIn here, but it redirects essentially.

        return { message: "Account created successfully! Redirecting to login...", success: true }

    } catch (error) {
        console.error("Registration error:", error)
        return { message: "Failed to create account. Please try again.", success: false }
    }
}
