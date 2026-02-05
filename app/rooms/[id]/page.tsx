import { db } from "@/lib/db"
import { notFound } from "next/navigation"
import { ReservationForm } from "@/components/reservation-form"

export default async function RoomPage({ params }: { params: { id: string } }) {
    const room = await db.room.findUnique({
        where: { id: params.id }
    })

    if (!room) {
        notFound()
    }

    return (
        <div className="bg-white min-h-screen">
            <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                    {/* Image Gallery (Placeholder) */}
                    <div className="flex flex-col">
                        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3 h-96 flex items-center justify-center text-gray-400">
                            {/* Standard Next.js Image component would go here */}
                            <span className="text-2xl">{room.type} Room Image</span>
                        </div>
                    </div>

                    {/* Room Info */}
                    <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{room.name}</h1>

                        <div className="mt-6">
                            <h3 className="sr-only">Description</h3>
                            <div className="text-base text-gray-700 space-y-6">
                                <p>{room.description}</p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <div className="flex items-center">
                                <h3 className="text-sm font-medium text-gray-900">Capacity: </h3>
                                <p className="ml-2 text-sm text-gray-500">2 Guests (Standard)</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <ReservationForm roomId={room.id} price={room.price} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
