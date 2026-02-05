import { db } from "@/lib/db";
import { RoomList } from "@/components/room-list";

export const dynamic = "force-dynamic";

export default async function RoomsPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Rooms</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Choose the perfect room for your stay.
                    </p>
                </div>
                <div className="mt-16 sm:mt-20">
                    <RoomList />
                </div>
            </div>
        </div>
    );
}
