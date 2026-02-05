import Link from "next/link"
import { auth } from "@/auth"

export async function Navbar() {
    const session = await auth()

    return (
        <nav className="bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <span className="font-bold text-xl text-gray-900">Brentharen</span>
                        </Link>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <Link href="/" className="border-transparent text-gray-500 hover:border-lemon-green hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                Home
                            </Link>
                            <Link href="/rooms" className="border-transparent text-gray-500 hover:border-lemon-green hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                Rooms
                            </Link>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        {session ? (
                            <div className="flex space-x-4 items-center">
                                <span className="text-sm text-gray-700">Hello, {session.user?.name || session.user?.email}</span>
                                <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-200">
                                    <img
                                        src={`https://placehold.co/150x150/ACD123/white?text=${session.user?.name ? session.user.name[0] : 'U'}`}
                                        alt="Profile"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                {session.user?.role === 'ADMIN' && (
                                    <Link href="/admin" className="text-gray-500 hover:text-gray-700 font-medium text-sm">Dashboard</Link>
                                )}
                                <Link href={session.user?.role === 'ADMIN' ? "/admin/settings" : "/guest/settings"} className="text-gray-500 hover:text-gray-700 font-medium text-sm">Settings</Link>
                                {/* Logout would be a form submission in NextAuth v5, kept simple here or improved later */}
                            </div>
                        ) : (
                            <Link href="/login" className="bg-lemon-green text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-lime-600">
                                Log in
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}
