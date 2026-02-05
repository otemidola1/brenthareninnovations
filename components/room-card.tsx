import Link from 'next/link'
import { Wifi, Tv, Wind, Coffee } from 'lucide-react'

interface RoomCardProps {
    id: string
    name: string
    type: string
    price: number
    description: string
}

export function RoomCard({ id, name, type, price, description }: RoomCardProps) {
    return (
        <div key={id} className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-2xl bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-64">
                <img
                    src={`https://placehold.co/600x400/ACD123/white?text=${name.replace(/ /g, '+')}`}
                    alt={name}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 flex flex-col flex-grow p-4">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">
                            <Link href={`/rooms/${id}`}>
                                <span aria-hidden="true" className="absolute inset-0" />
                                {name}
                            </Link>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{type}</p>
                    </div>
                    <p className="text-lg font-bold text-lemon-green">₦{price.toLocaleString()}</p>
                </div>

                <p className="mt-2 text-sm text-gray-600 line-clamp-2">{description}</p>

                {/* Amenities Icons */}
                <div className="mt-4 flex items-center space-x-3 text-gray-400">
                    <div className="flex items-center gap-1" title="Free Wifi">
                        <Wifi className="w-4 h-4" />
                    </div>
                    <div className="flex items-center gap-1" title="Air Conditioning">
                        <Wind className="w-4 h-4" />
                    </div>
                    <div className="flex items-center gap-1" title="Smart TV">
                        <Tv className="w-4 h-4" />
                    </div>
                    <div className="flex items-center gap-1" title="Breakfast">
                        <Coffee className="w-4 h-4" />
                    </div>
                    <span className="text-xs ml-auto text-gray-400">+ more</span>
                </div>

                <div className="mt-auto pt-4">
                    <button className="w-full bg-gray-900 text-white py-2 rounded-lg font-medium text-sm group-hover:bg-lemon-green transition-colors">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    )
}
