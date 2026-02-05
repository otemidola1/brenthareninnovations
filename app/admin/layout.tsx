import { AdminSidebar } from "@/components/admin-sidebar";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth();

    if (session?.user?.role !== "ADMIN") {
        redirect("/login");
    }

    return (
        <div className="flex h-screen bg-gray-100">
            <AdminSidebar />
            <main className="flex-1 overflow-y-auto p-8">
                {children}
            </main>
        </div>
    );
}
