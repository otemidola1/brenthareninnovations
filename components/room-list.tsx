import { db } from "@/lib/db"
import { RoomCard } from "@/components/room-card"

export async function RoomList() {
    let rooms = []
    try {
        rooms = await db.room.findMany({
            where: { isAvailable: true },
            orderBy: { price: 'asc' },
            take: 6
        })
    } catch (error) {
        console.error("Failed to fetch rooms:", error)
        return <div className="text-center py-10 text-red-500">Failed to load rooms. Please check the logs.</div>
    }

    if (rooms.length === 0) {
        return <div className="text-center py-10 text-gray-500">No rooms available at the moment.</div>
    }

    return (
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {rooms.map((room) => (
                <RoomCard
                    key={room.id}
                    id={room.id}
                    name={room.name}
                    type={room.type || "Standard"}
                    price={room.price}
                    description={room.description || "No description available."}
                />
            ))}
        </div>
    )
}
