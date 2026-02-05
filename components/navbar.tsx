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
                        {session ? (
                            <div className="flex space-x-4 items-center">
                                <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-200">
                                    <img
                                        src={`https://placehold.co/150x150/ACD123/white?text=${session.user?.name ? session.user.name[0] : 'U'}`}
                                        alt="Profile"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                {session.user?.role === 'ADMIN' ? (
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
                </div>
            </div>
        </nav>
    )
}
