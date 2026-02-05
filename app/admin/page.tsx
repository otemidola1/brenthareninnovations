import { auth } from "@/auth"
import { db } from "@/lib/db"
import { Card } from "@/components/ui/card"

export default async function AdminDashboard() {
    // Parallel data fetching
    const [totalBookings, totalGuests, revenue, recentBookings, totalRooms] = await Promise.all([
        db.reservation.count(),
        db.user.count({ where: { role: 'GUEST' } }),
        db.reservation.aggregate({
            _sum: {
                // Assuming reservation logic would calculate this, but for now we might need to sum room prices
                // Simplify: Just count confirmed bookings * avg price or similar, or 0 if no price field on reservation
            }
        }),
        db.reservation.findMany({
            take: 5,
            orderBy: { createdAt: 'desc' },
            include: { user: true, room: true }
        }),
        db.room.count()
    ])

    // Calculate revenue simplified (Mock logic since Reservation doesn't store total price yet)
    // In a real app, Reservation model should store 'totalPrice'
    const totalRevenue = "N" + (totalBookings * 15000).toLocaleString() // Placeholder calculation

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6 flex items-center">
                    <div className="flex-shrink-0 bg-lemon-green rounded-md p-3">
                        {/* Icon placeholder */}
                        <span className="text-white text-xl">📅</span>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                        <dt className="text-sm font-medium text-gray-500 truncate">Total Bookings</dt>
                        <dd className="text-3xl font-bold text-gray-900">{totalBookings}</dd>
                    </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6 flex items-center">
                    <div className="flex-shrink-0 bg-gray-100 rounded-md p-3">
                        <span className="text-gray-500 text-xl">👥</span>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                        <dt className="text-sm font-medium text-gray-500 truncate">Total Guests</dt>
                        <dd className="text-3xl font-bold text-gray-900">{totalGuests}</dd>
                    </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6 flex items-center">
                    <div className="flex-shrink-0 bg-gray-100 rounded-md p-3">
                        <span className="text-gray-500 text-xl">💰</span>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                        <dt className="text-sm font-medium text-gray-500 truncate">Revenue</dt>
                        <dd className="text-3xl font-bold text-gray-900">{totalRevenue}</dd>
                    </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6 flex items-center">
                    <div className="flex-shrink-0 bg-gray-100 rounded-md p-3">
                        <span className="text-gray-500 text-xl">🛏️</span>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                        <dt className="text-sm font-medium text-gray-500 truncate">Rooms</dt>
                        <dd className="text-3xl font-bold text-gray-900">{totalRooms}</dd>
                    </div>
                </div>
            </div>

            {/* Recent Bookings Table */}
            <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Bookings</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guest</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {recentBookings.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">No bookings found.</td>
                                </tr>
                            ) : (
                                recentBookings.map((res) => (
                                    <tr key={res.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">#{res.id.slice(-4)}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{res.user.name || res.user.email}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{res.room.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {new Date(res.startDate).toLocaleDateString()} - {new Date(res.endDate).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${res.status === 'CONFIRMED' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                                {res.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
