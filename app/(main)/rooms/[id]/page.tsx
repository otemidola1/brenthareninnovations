import { db } from "@/lib/db"
import { notFound } from "next/navigation"
import { ReservationForm } from "@/components/reservation-form"
import { auth } from "@/auth"
import { Wifi, Tv, Wind, Coffee, Check } from "lucide-react"

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
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
                    {/* Product Image */}
                    <div className="product-image lg:self-start">
                        <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100 mb-4">
                            <img
                                src={`https://placehold.co/800x600/ACD123/white?text=${room.name.replace(/ /g, '+')}`}
                                alt={room.name}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
                                <img src={`https://placehold.co/400x300/eee/999?text=Bath`} alt="Bath" className="h-full w-full object-cover" />
                            </div>
                            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
                                <img src={`https://placehold.co/400x300/eee/999?text=View`} alt="View" className="h-full w-full object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Room Info & Form */}
                    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{room.name}</h1>
                        <div className="mt-3">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl tracking-tight text-gray-900">₦{room.price.toLocaleString()} <span className="text-base text-gray-500 font-normal">/ night</span></p>
                        </div>

                        <div className="mt-6">
                            <h3 className="sr-only">Description</h3>
                            <p className="text-base text-gray-700 space-y-6">{room.description}</p>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-sm font-medium text-gray-900">Amenities</h3>
                            <div className="mt-4 flow-root">
                                <ul role="list" className="-my-4 divide-y divide-gray-200">
                                    <li className="flex items-center space-x-3 py-3">
                                        <Wifi className="flex-shrink-0 h-5 w-5 text-gray-400" />
                                        <span className="text-sm text-gray-600">Free High-Speed Wifi</span>
                                    </li>
                                    <li className="flex items-center space-x-3 py-3">
                                        <Wind className="flex-shrink-0 h-5 w-5 text-gray-400" />
                                        <span className="text-sm text-gray-600">Air Conditioning</span>
                                    </li>
                                    <li className="flex items-center space-x-3 py-3">
                                        <Tv className="flex-shrink-0 h-5 w-5 text-gray-400" />
                                        <span className="text-sm text-gray-600">Smart TV with Netflix</span>
                                    </li>
                                    <li className="flex items-center space-x-3 py-3">
                                        <Coffee className="flex-shrink-0 h-5 w-5 text-gray-400" />
                                        <span className="text-sm text-gray-600">Coffee Maker & Mini Bar</span>
                                    </li>
                                    <li className="flex items-center space-x-3 py-3">
                                        <Check className="flex-shrink-0 h-5 w-5 text-gray-400" />
                                        <span className="text-sm text-gray-600">Daily Housekeeping</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 border-t border-gray-200 pt-8">
                            <p className={`text-sm font-medium mb-4 ${room.isAvailable ? 'text-green-600' : 'text-red-600'}`}>
                                {room.isAvailable ? 'Available for Immediate Booking' : 'Currently Unavailable'}
                            </p>
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
