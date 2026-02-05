import { RoomList } from "@/components/room-list"
import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-gray-900 overflow-hidden">
        <img
          src="https://placehold.co/1920x1080/333/666?text=Luxury+Bedroom+Background"
          alt="Luxury Bedroom"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
        />
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Welcome to Brentharen Innovations
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
            Experience modern comfort and tranquility in the heart of the city.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/rooms"
              className="rounded-md bg-lemon-green px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-lime-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lemon-green uppercase tracking-wide"
            >
              Book Your Stay
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center py-16 bg-white">
        <h2 className="text-3xl font-bold text-gray-900">A Modern Retreat</h2>
      </div>

      {/* Featured Rooms Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Rooms</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Choose from our selection of premium rooms designed for your comfort.
          </p>
        </div>
        <RoomList />
      </div>
    </div>
  )
}
