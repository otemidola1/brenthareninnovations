import { auth } from "@/auth"
import { db } from "@/lib/db"
import Link from "next/link"
import { redirect } from "next/navigation"

export default async function RoomListPage() {
    const session = await auth()
    if (session?.user?.role !== "ADMIN") redirect("/login")

    const rooms = await db.room.findMany()

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Rooms</h1>
                <Link
                    href="/admin/rooms/new"
                    className="bg-lemon-green text-white px-4 py-2 rounded-md hover:bg-lime-600"
                >
                    Add Room
                </Link>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                    {rooms.map((room) => (
                        <li key={room.id}>
                            <div className="px-4 py-4 sm:px-6 items-center flex justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-900 truncate">{room.name}</p>
                                    <p className="text-sm text-gray-500">{room.type} - N{room.price}</p>
                                </div>
                                <div className="flex space-x-2">
                                    <Link href={`/admin/rooms/${room.id}/edit`} className="text-indigo-600 hover:text-indigo-900">Edit</Link>
                                    <button className="text-red-600 hover:text-red-900">Delete</button>
                                </div>
                            </div>
                        </li>
                    ))}
                    {rooms.length === 0 && (
                        <li className="px-4 py-4 text-center text-gray-500">No rooms found.</li>
                    )}
                </ul>
            </div>
        </div>
    )
}
