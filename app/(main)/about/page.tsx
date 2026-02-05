import { Users, Award, Heart, ShieldCheck } from "lucide-react"

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src="/about_hero.webp"
                    alt="Our Team"
                    className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
                />
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">We Are Brentharen Innovations</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Redefining hospitality with a blend of modern luxury and heartfelt service. Since 2024, our mission has been to create a sanctuary for travelers in the bustling city.
                        </p>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-lemon-green">Our Core Values</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        What Drives Us
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                        <div className="flex flex-col">
                            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                <Heart className="h-5 w-5 flex-none text-lemon-green" />
                                Passion for Service
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <p className="flex-auto">We go above and beyond to ensure every guest feels at home.</p>
                            </dd>
                        </div>
                        <div className="flex flex-col">
                            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                <Award className="h-5 w-5 flex-none text-lemon-green" />
                                Excellence
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <p className="flex-auto">We maintain the highest standards in cleanliness and comfort.</p>
                            </dd>
                        </div>
                        <div className="flex flex-col">
                            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                <Users className="h-5 w-5 flex-none text-lemon-green" />
                                Community
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <p className="flex-auto">We believe in fostering connections and supporting our local community.</p>
                            </dd>
                        </div>
                        <div className="flex flex-col">
                            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                <ShieldCheck className="h-5 w-5 flex-none text-lemon-green" />
                                Integrity
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <p className="flex-auto">Honesty and transparency are at the heart of everything we do.</p>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>

            {/* Team Section Placeholder */}
            <div className="bg-gray-50 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet Our Leadership</h2>
                    </div>
                    <ul role="list" className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        <li>
                            <img className="aspect-[3/2] w-full rounded-2xl object-cover" src="https://placehold.co/400x400/333/fff?text=CEO" alt="" />
                            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Leslie Alexander</h3>
                            <p className="text-base leading-7 text-gray-600">Co-Founder / CEO</p>
                        </li>
                        <li>
                            <img className="aspect-[3/2] w-full rounded-2xl object-cover" src="https://placehold.co/400x400/333/fff?text=Manager" alt="" />
                            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Courtney Henry</h3>
                            <p className="text-base leading-7 text-gray-600">General Manager</p>
                        </li>
                        <li>
                            <img className="aspect-[3/2] w-full rounded-2xl object-cover" src="https://placehold.co/400x400/333/fff?text=Hospitality" alt="" />
                            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Lindsay Walton</h3>
                            <p className="text-base leading-7 text-gray-600">Head of Hospitality</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

