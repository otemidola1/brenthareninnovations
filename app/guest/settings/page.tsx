import { ChangePasswordForm } from "@/components/settings/change-password-form"

export default function GuestSettingsPage() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">My Settings</h1>
            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Security</h2>
                <ChangePasswordForm />
            </div>
        </div>
    )
}
