import { auth } from "@/auth"
import { db } from "@/lib/db"
import { redirect } from "next/navigation"

export default async function GuestDashboard() {
    const session = await auth()

    if (!session?.user) {
        redirect("/login")
    }

    const reservations = await db.reservation.findMany({
        where: {
            userId: session.user.id
        },
        include: {
            room: true
        },
        orderBy: {
            startDate: 'desc'
        }
    })

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">My Dashboard</h1>

            <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        My Bookings
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        History of your stays with us.
                    </p>
                </div>
                {reservations.length === 0 ? (
                    <div className="p-6 text-center text-gray-500">
                        You haven't made any reservations yet.
                    </div>
                ) : (
                    <ul className="divide-y divide-gray-200">
                        {reservations.map((reservation) => (
                            <li key={reservation.id}>
                                <div className="px-4 py-4 sm:px-6">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium text-lemon-green truncate">
                                            {reservation.room.name}
                                        </p>
                                        <div className="ml-2 flex-shrink-0 flex">
                                            <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${reservation.status === 'CONFIRMED' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                {reservation.status}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-2 sm:flex sm:justify-between">
                                        <div className="sm:flex">
                                            <p className="flex items-center text-sm text-gray-500">
                                                {reservation.room.type} Room
                                            </p>
                                        </div>
                                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                            <p>
                                                {new Date(reservation.startDate).toLocaleDateString()} - {new Date(reservation.endDate).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}
