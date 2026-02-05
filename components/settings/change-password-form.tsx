'use client'

import { changePassword } from "@/app/actions/settings"
import { useActionState } from "react"

const initialState = {
    message: '',
    error: ''
}

export function ChangePasswordForm() {
    // @ts-ignore - useActionState types might be tricky with simple objects
    const [state, formAction, isPending] = useActionState(async (prevState: any, formData: FormData) => {
        const result = await changePassword(formData)
        if (result?.error) return { error: result.error, message: '' }
        if (result?.success) return { message: result.success, error: '' }
        return { message: '', error: '' }
    }, initialState)

    return (
        <form action={formAction} className="space-y-4 max-w-md p-6 border rounded-lg shadow-sm bg-white">
            <h3 className="text-lg font-medium text-gray-900">Change Password</h3>

            <div>
                <label className="block text-sm font-medium text-gray-700">Old Password</label>
                <input
                    name="oldPassword"
                    type="password"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lemon-green focus:ring-lemon-green sm:text-sm p-2 border"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">New Password</label>
                <input
                    name="newPassword"
                    type="password"
                    required
                    minLength={6}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lemon-green focus:ring-lemon-green sm:text-sm p-2 border"
                />
            </div>

            {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}
            {state?.message && <p className="text-green-500 text-sm">{state.message}</p>}

            <button
                type="submit"
                disabled={isPending}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lemon-green hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lemon-green disabled:opacity-50"
            >
                {isPending ? 'Updating...' : 'Update Password'}
            </button>
        </form>
    )
}
