import { auth } from "@/auth"
import { ChangePasswordForm } from "@/components/settings/change-password-form"

export default async function GuestSettingsPage() {
    const session = await auth()

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">My Settings</h1>

            <div className="bg-white p-6 rounded-lg shadow mb-6 flex items-center space-x-6">
                <div className="h-20 w-20 rounded-full overflow-hidden bg-gray-200">
                    <img
                        src={`https://placehold.co/150x150/ACD123/white?text=${session?.user?.name ? session.user.name[0] : 'G'}`}
                        alt="Profile"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-gray-900">{session?.user?.name || session?.user?.email}</h2>
                    <p className="text-sm text-gray-500">Guest Account</p>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Security</h2>
                <ChangePasswordForm />
            </div>
        </div>
    )
}
