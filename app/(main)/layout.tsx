import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { auth } from "@/auth";

export default async function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth();

    return (
        <>
            <Navbar user={session?.user} />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </>
    );
}
