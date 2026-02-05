import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <span className="text-2xl font-bold text-lemon-green">Brentharen</span>
                        <p className="text-sm leading-6 text-gray-300">
                            Providing luxury and comfort for travelers seeking an unforgettable experience.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link href="/rooms" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Rooms
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Amenities
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/login" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Admin Login
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-gray-400">
                        &copy; {new Date().getFullYear()} Brentharen Innovations. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
