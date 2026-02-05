import Link from "next/link"
import { Room } from "@prisma/client"

interface RoomCardProps {
    room: Room
}

export function RoomCard({ room }: RoomCardProps) {
    return (
        <div key={room.id} className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-56 relative">
                <img
                    src={`https://placehold.co/600x400/f3f4f6/9ca3af?text=${room.type}+Room`}
                    alt={room.name}
                    className="h-full w-full object-cover sm:h-full sm:w-full"
                />
            </div>
            <div className="flex-1 p-4 space-y-2 flex flex-col">
                <h3 className="text-lg font-medium text-gray-900">
                    <Link href={`/rooms/${room.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {room.name}
                    </Link>
                </h3>
                <p className="text-sm text-gray-500">{room.description || "No description available."}</p>
                <div className="mt-auto pt-4 flex items-center justify-between">
                    <p className="text-base font-semibold text-gray-900">N{room.price} <span className="text-sm font-normal text-gray-500">/ night</span></p>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${room.isAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {room.isAvailable ? 'Available' : 'Booked'}
                    </span>
                </div>
            </div>
        </div>
    )
}
