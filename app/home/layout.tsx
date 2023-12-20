import Landing from '@/app/navbars/Landing'
export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Landing />
            <main>
                {children}
            </main>
        </>
    )
}