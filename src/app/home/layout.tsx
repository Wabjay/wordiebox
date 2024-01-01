import Landing from '@/src/component/navbars/Landing'
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