import { db } from "@/lib/db"
import { RoomCard } from "@/components/room-card"

export async function RoomList() {
    const rooms = await db.room.findMany({
        where: { isAvailable: true },
        orderBy: { price: 'asc' },
        take: 6
    })

    return (
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {rooms.map((room) => (
                <RoomCard key={room.id} room={room} />
            ))}
        </div>
    )
}
