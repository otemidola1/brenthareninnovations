import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="bg-white">
            <div className="relative isolate bg-gray-900">
                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Contact Us</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            We'd love to hear from you. Send us a message or visit us at our HQ.
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-xl lg:max-w-4xl">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-semibold leading-8 text-gray-900">Get in touch</h3>
                                <p className="mt-2 text-base leading-7 text-gray-600">
                                    Common turnaround time for email responses is 1 business day.
                                </p>
                            </div>

                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Address</span>
                                    <MapPin className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                </dt>
                                <dd>
                                    <p className="leading-6 text-gray-900">123 Innovation Drive</p>
                                    <p className="leading-6 text-gray-900">Lagos, Nigeria</p>
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Telephone</span>
                                    <Phone className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                </dt>
                                <dd>
                                    <a className="hover:text-gray-900" href="tel:+2348001234567">
                                        +234 800 123 4567
                                    </a>
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <Mail className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                </dt>
                                <dd>
                                    <a className="hover:text-gray-900" href="mailto:support@brentharen.com">
                                        support@brentharen.com
                                    </a>
                                </dd>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form action="#" method="POST" className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                                    <div className="mt-2.5">
                                        <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lemon-green sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
                                    <div className="mt-2.5">
                                        <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lemon-green sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                                    <div className="mt-2.5">
                                        <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lemon-green sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                                    <div className="mt-2.5">
                                        <textarea name="message" id="message" rows={4} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lemon-green sm:text-sm sm:leading-6"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10">
                                <button type="submit" className="flex items-center justify-center gap-2 w-full rounded-md bg-lemon-green px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-lime-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lemon-green">
                                    <Send className="w-4 h-4" /> Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

