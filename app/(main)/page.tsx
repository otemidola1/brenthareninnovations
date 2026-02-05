import { RoomList } from "@/components/room-list"
import Link from "next/link"
import { Wifi, ShieldCheck, Clock, Coffee } from "lucide-react"

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Hotel"
          className="absolute inset-0 -z-10 h-full w-full object-cover brightness-50"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Welcome to <span className="text-lemon-green">Brentharen</span>
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Discover a sanctuary of modern luxury and timeless hospitality in the heart of Lagos.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/rooms"
                className="rounded-md bg-lemon-green px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-lime-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lemon-green uppercase tracking-wide transition-all transform hover:scale-105"
              >
                Book Your Stay
              </Link>
              <Link href="/about" className="text-sm font-semibold leading-6 text-white hover:text-lemon-green transition-colors">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">World Class Amenities</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Everything you need for a comfortable and productive stay.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          <div className="text-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-lemon-green text-white mx-auto mb-4">
              <Wifi className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">High-Speed Wifi</h3>
            <p className="mt-2 text-base text-gray-500">Stay connected with our complimentary fiber-optic internet.</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-lemon-green text-white mx-auto mb-4">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Secure & Safe</h3>
            <p className="mt-2 text-base text-gray-500">24/7 security and surveillance for your peace of mind.</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-lemon-green text-white mx-auto mb-4">
              <Coffee className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Premium Dining</h3>
            <p className="mt-2 text-base text-gray-500">Enjoy local and international delicacies in our restaurant.</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-lemon-green text-white mx-auto mb-4">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">24/7 Support</h3>
            <p className="mt-2 text-base text-gray-500">Our concierge is always available to assist you.</p>
          </div>
        </div>
      </div>

      {/* Featured Rooms Section */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Rooms</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Choose from our selection of premium rooms designed for your comfort.
            </p>
          </div>
          <RoomList />
          <div className="mt-12 text-center">
            <Link href="/rooms" className="text-lemon-green font-semibold hover:text-lime-600">
              View all rooms <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Our Guests Say</h2>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col justify-between bg-white p-6 shadow-lg ring-1 ring-gray-900/5 rounded-2xl">
              <blockquote className="text-gray-900">
                <p>“The service at Brentharen is simply unmatched. The team went above and beyond to make my stay memorable.”</p>
              </blockquote>
              <div className="mt-6 flex items-center gap-x-4">
                <img className="h-10 w-10 rounded-full bg-gray-50" src="https://placehold.co/100x100?text=JD" alt="" />
                <div>
                  <div className="font-semibold">John Doe</div>
                  <div className="text-gray-600 text-sm">Business Traveler</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between bg-white p-6 shadow-lg ring-1 ring-gray-900/5 rounded-2xl">
              <blockquote className="text-gray-900">
                <p>“I loved the modern design and the attention to detail in the rooms. Highly recommended!”</p>
              </blockquote>
              <div className="mt-6 flex items-center gap-x-4">
                <img className="h-10 w-10 rounded-full bg-gray-50" src="https://placehold.co/100x100?text=JS" alt="" />
                <div>
                  <div className="font-semibold">Jane Smith</div>
                  <div className="text-gray-600 text-sm">Vacationer</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between bg-white p-6 shadow-lg ring-1 ring-gray-900/5 rounded-2xl">
              <blockquote className="text-gray-900">
                <p>“A hidden gem in Lagos. Clean, safe, and absolutely beautiful.”</p>
              </blockquote>
              <div className="mt-6 flex items-center gap-x-4">
                <img className="h-10 w-10 rounded-full bg-gray-50" src="https://placehold.co/100x100?text=MA" alt="" />
                <div>
                  <div className="font-semibold">Michael A.</div>
                  <div className="text-gray-600 text-sm">Guest</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
