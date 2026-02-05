'use client'

import { createReservation } from "@/app/actions/reservations"
// import { useActionState } from "react" // Not available in some older Next.js versions or experimental, using standard form action for simplicity or useTransition
import { useState, useTransition } from "react"

export function ReservationForm({ roomId, price }: { roomId: string, price: number }) {
    const [message, setMessage] = useState<string>("")
    const [isPending, startTransition] = useTransition()

    async function handleSubmit(formData: FormData) {
        startTransition(async () => {
            const result = await createReservation(formData)
            setMessage(result.message || "")
        })
    }

    return (
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Book this Room</h3>
            <p className="text-2xl font-bold text-gray-900 mb-6">N{price} <span className="text-sm font-normal text-gray-500">/ night</span></p>

            <form action={handleSubmit} className="space-y-4">
                <input type="hidden" name="roomId" value={roomId} />

                <div>
                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Check-in</label>
                    <input
                        required
                        type="date"
                        name="startDate"
                        id="startDate"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lemon-green focus:ring-lemon-green sm:text-sm p-2 border"
                    />
                </div>

                <div>
                    <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">Check-out</label>
                    <input
                        required
                        type="date"
                        name="endDate"
                        id="endDate"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lemon-green focus:ring-lemon-green sm:text-sm p-2 border"
                    />
                </div>

                {message && (
                    <div className={`p-3 rounded-md text-sm ${message.includes("confirmed") ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                        {message}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isPending}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lemon-green hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lemon-green disabled:opacity-50"
                >
                    {isPending ? "Booking..." : "Book Now"}
                </button>
            </form>
        </div>
    )
}
