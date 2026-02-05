'use client'

import { registerUser } from "@/app/actions/auth"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function RegisterPage() {
    const router = useRouter()
    const [message, setMessage] = useState<string | null>(null)
    const [isSuccess, setIsSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    async function handleSubmit(formData: FormData) {
        setLoading(true)
        setMessage(null)

        const result = await registerUser(formData)

        setMessage(result.message)
        setIsSuccess(!!result.success)
        setLoading(false)

        if (result.success) {
            setTimeout(() => {
                router.push("/login")
            }, 2000)
        }
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-50 h-screen">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Create an account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                            Full Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lemon-green sm:text-sm sm:leading-6 px-3"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lemon-green sm:text-sm sm:leading-6 px-3"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                minLength={6}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lemon-green sm:text-sm sm:leading-6 px-3"
                            />
                        </div>
                    </div>

                    {message && (
                        <div className={`text-sm text-center p-2 rounded ${isSuccess ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-500'}`}>
                            {message}
                        </div>
                    )}

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex w-full justify-center rounded-md bg-lemon-green px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-lime-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lemon-green disabled:opacity-70"
                        >
                            {loading ? "Creating account..." : "Register"}
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <Link href="/login" className="font-semibold leading-6 text-lemon-green hover:text-lime-500">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    )
}
