import { db } from "@/lib/db"
import { notFound } from "next/navigation"
import { ReservationForm } from "@/components/reservation-form"
import { auth } from "@/auth"

export default async function RoomPage({ params }: { params: { id: string } }) {
    const session = await auth()
    const room = await db.room.findUnique({
        where: { id: params.id }
    })

    if (!room) {
        notFound()
    }

    return (
        <div className="bg-white">
            <div className="pt-6 pb-16 sm:pb-24">
                <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:auto-rows-min lg:gap-x-8">
                        {/* Image Gallery (Placeholder) */}
                        <div className="lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                                <img
                                    src={`https://placehold.co/600x400/ACD123/white?text=${room.name.replace(/ /g, '+')}`}
                                    alt={room.name}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                        </div>

                        {/* Room Info */}
                        <div className="mt-10 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:max-w-lg lg:self-start">
                            <div className="flex justify-between">
                                <h1 className="text-3xl font-bold tracking-tight text-gray-900">{room.name}</h1>
                                <p className="text-xl font-medium text-gray-900">₦{room.price.toLocaleString()}</p>
                            </div>

                            <div className="mt-4">
                                <h2 className="sr-only">Description</h2>
                                <p className="text-base text-gray-500">{room.description}</p>
                            </div>

                            <div className="mt-6 flex items-center">
                                <p className={`text-sm font-medium ${room.isAvailable ? 'text-green-600' : 'text-red-600'}`}>
                                    {room.isAvailable ? 'Available' : 'Currently Unavailable'}
                                </p>
                            </div>
                        </div>

                        {/* Reservation Form */}
                        <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
                            <ReservationForm
                                roomId={room.id}
                                price={room.price}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
