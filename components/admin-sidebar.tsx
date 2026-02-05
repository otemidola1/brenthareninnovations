'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
    { name: 'Overview', href: '/admin' },
    { name: 'Bookings', href: '/admin/reservations' },
    { name: 'Guests', href: '/admin/guests' }, // Placeholder for now
    { name: 'Rooms', href: '/admin/rooms' },
    { name: 'Settings', href: '/admin/settings' },
]

export function AdminSidebar() {
    const pathname = usePathname()

    return (
        <div className="flex min-h-screen w-64 flex-col bg-gray-900">
            <div className="flex h-16 shrink-0 items-center px-6">
                <span className="text-xl font-bold text-lemon-green">Admin Panel</span>
            </div>
            <nav className="flex flex-1 flex-col px-4 py-4 space-y-2">
                {navigation.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${isActive
                                    ? 'bg-lemon-green text-white'
                                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                                }`}
                        >
                            {item.name}
                        </Link>
                    )
                })}

                <div className="mt-auto border-t border-gray-800 pt-4">
                    <Link
                        href="/"
                        className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                        Exit to Site
                    </Link>
                </div>
            </nav>
        </div>
    )
}
