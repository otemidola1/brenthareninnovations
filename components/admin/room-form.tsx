'use client'

import { createRoom } from "@/app/actions/rooms"
import { useActionState } from "react"
import { redirect } from "next/navigation"

const initialState = {
    message: '',
    error: ''
}

export function RoomForm() {
    // @ts-ignore
    const [state, formAction, isPending] = useActionState(async (prevState: any, formData: FormData) => {
        const result = await createRoom(formData)
        if (result?.error) return { error: result.error, message: '' }
        if (result?.success) redirect("/admin/rooms") // Redirect on success
        return { message: '', error: '' }
    }, initialState)

    return (
        <form action={formAction} className="space-y-6 max-w-lg bg-white p-6 rounded-lg shadow">

            <div>
                <label className="block text-sm font-medium text-gray-700">Room Name</label>
                <input name="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2" />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Type</label>
                <select name="type" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2">
                    <option value="Single">Single</option>
                    <option value="Double">Double</option>
                    <option value="Suite">Suite</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Price (N)</label>
                <input name="price" type="number" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2" />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Capacity</label>
                <input name="capacity" type="number" defaultValue={2} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2" />
            </div>

            <div className="flex items-center">
                <input name="isAvailable" type="checkbox" defaultChecked className="h-4 w-4 text-lemon-green border-gray-300 rounded" />
                <label className="ml-2 block text-sm text-gray-900">Available for booking</label>
            </div>

            {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}

            <button type="submit" disabled={isPending} className="w-full bg-lemon-green text-white py-2 px-4 rounded-md hover:bg-lime-600 disabled:opacity-50">
                {isPending ? 'Saving...' : 'Create Room'}
            </button>
        </form>
    )
}
