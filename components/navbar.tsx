'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'
import { useState } from 'react'

// Dummy auth hook for client component (Replace with actual SessionProvider pattern in real app if strictly client)
// However, since this was an async server component before, we need to convert to client for state.
// We can accept session as prop or use useSession(). For simplicity given setup, let's assume props or standard useSession.
// Re-writing Navbar as Client Component to handle open/close state.
// We'll fetching session via prop if we wrap it in a server component, OR use next-auth's useSession.
// Given current structure, let's make it a client component and use a wrapper or just useSession.
// BUT `auth()` is server-side. Let's make a wrapper in `app/(main)/layout.tsx` or `components/navbar-wrapper.tsx`?
// EASIER: Make Navbar accept 'user' prop.

interface User {
    name?: string | null
    email?: string | null
    image?: string | null
    role?: string
}

export function Navbar({ user }: { user?: User }) {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    return (
        <nav className="bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <span className="font-bold text-xl text-lemon-green flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                                Brentharen Innovations
                            </span>
                        </Link>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-4 items-center">
                            <Link href="/" className="text-gray-500 hover:text-lemon-green px-3 py-2 text-sm font-medium">Home</Link>
                            <Link href="/rooms" className="text-gray-500 hover:text-lemon-green px-3 py-2 text-sm font-medium">Rooms</Link>
                            <Link href="/rooms" className="text-gray-500 hover:text-lemon-green px-3 py-2 text-sm font-medium">Reservation</Link>
                            <Link href="/about" className="text-gray-500 hover:text-lemon-green px-3 py-2 text-sm font-medium">About Us</Link>
                            <Link href="/contact" className="text-gray-500 hover:text-lemon-green px-3 py-2 text-sm font-medium">Contact</Link>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        {user ? (
                            <div className="flex space-x-4 items-center">
                                <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-200">
                                    <img
                                        src={`https://placehold.co/150x150/ACD123/white?text=${user?.name ? user.name[0] : 'U'}`}
                                        alt="Profile"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                {user.role === 'ADMIN' ? (
                                    <Link href="/admin" className="text-lemon-green border border-lemon-green hover:bg-lemon-green hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">Admin Panel</Link>
                                ) : (
                                    <Link href="/guest" className="text-lemon-green border border-lemon-green hover:bg-lemon-green hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">My Dashboard</Link>
                                )}
                            </div>
                        ) : (
                            <div className="flex space-x-4">
                                <Link href="/login" className="text-lemon-green border border-lemon-green hover:bg-lemon-green hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                                    Admin Panel
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center sm:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lemon-green"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Icon when menu is closed. */}
                            {/* Menu open: "hidden", Menu closed: "block" */}
                            <svg
                                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/* Icon when menu is open. */}
                            {/* Menu open: "block", Menu closed: "hidden" */}
                            <svg
                                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state. */}
            <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
                <div className="pt-2 pb-3 space-y-1">
                    <Link href="/" className="bg-lemon-green border-l-4 border-lemon-green text-white block pl-3 pr-4 py-2 text-base font-medium" aria-current="page">Home</Link>
                    <Link href="/rooms" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Rooms</Link>
                    <Link href="/rooms" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Reservation</Link>
                    <Link href="/about" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">About Us</Link>
                    <Link href="/contact" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Contact</Link>
                </div>
                <div className="pt-4 pb-4 border-t border-gray-200">
                    {user ? (
                        <div className="flex items-center px-4">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src={`https://placehold.co/150x150/ACD123/white?text=${user?.name ? user.name[0] : 'U'}`}
                                    alt=""
                                />
                            </div>
                            <div className="ml-3">
                                <div className="text-base font-medium text-gray-800">{user.name || user.email}</div>
                                <div className="text-sm font-medium text-gray-500">{user.email}</div>
                            </div>
                        </div>
                    ) : (
                        <div className="px-4">
                            <Link href="/login" className="block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-lemon-green hover:bg-lime-600">
                                Log in
                            </Link>
                        </div>
                    )}
                    {user && (
                        <div className="mt-3 space-y-1">
                            {user.role === 'ADMIN' ? (
                                <Link href="/admin" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Admin Dashboard</Link>
                            ) : (
                                <Link href="/guest" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">My Dashboard</Link>
                            )}
                            <Link href={user.role === 'ADMIN' ? "/admin/settings" : "/guest/settings"} className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Settings</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

