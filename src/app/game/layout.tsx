import Dashboard from '@/src/component/navbars/Dashboard'

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Dashboard />
            <main className='w-full laptop:max-w-[1152px] mx-auto h-[100vh]'>
                {children}
            </main>
        </>
    )
}