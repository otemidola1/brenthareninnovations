import { RoomList } from "@/components/room-list"
import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-gray-900">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Experience Luxury at <span className="text-lemon-green">Brentharen</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Discover comfort, elegance, and serenity in the heart of the city. Book your stay today and enjoy an unforgettable experience.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/rooms"
                className="rounded-md bg-lemon-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lemon-green"
              >
                Book Now
              </Link>
              <Link href="/login" className="text-sm font-semibold leading-6 text-white">
                Log in <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
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
