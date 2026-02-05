import { auth } from "@/auth"
import { db } from "@/lib/db"
import { Card } from "@/components/ui/card"
import { redirect } from "next/navigation"
import Link from "next/link"

export default async function AdminDashboard() {
    const session = await auth()

    if (session?.user?.role !== "ADMIN") {
        redirect("/login")
    }

    const [totalRooms, totalReservations, recentReservations] = await Promise.all([
        db.room.count(),
        db.reservation.count(),
        db.reservation.findMany({
            take: 5,
            orderBy: { createdAt: 'desc' },
            include: { user: true, room: true }
        })
    ])

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

            <div className="flex gap-4 mb-8">
                <Link href="/admin/rooms/new" className="bg-lemon-green text-white px-4 py-2 rounded hover:bg-lime-600">
                    Add Room
                </Link>
                <Link href="/admin/rooms" className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
                    Manage Rooms
                </Link>
                <Link href="/admin/reservations" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
                    View Reservations
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
                <Card title="Total Rooms" value={totalRooms} />
                <Card title="Total Reservations" value={totalReservations} />
                <Card title="Occupancy Rate" value="0%" description="Coming soon" />
            </div>

            <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                {recentReservations.length === 0 ? (
                    <p className="text-gray-500">No reservations yet.</p>
                ) : (
                    <ul className="divide-y divide-gray-200">
                        {recentReservations.map((res) => (
                            <li key={res.id} className="py-4">
                                <div className="flex space-x-3">
                                    <div className="flex-1 space-y-1">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-sm font-medium">{res.user.name || res.user.email}</h3>
                                            <p className="text-sm text-gray-500">{new Date(res.createdAt).toLocaleDateString()}</p>
                                        </div>
                                        <p className="text-sm text-gray-500">
                                            Booked {res.room.name} ({res.status})
                                        </p>
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
