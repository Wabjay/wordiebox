import type { Metadata } from 'next'
// import getUser from '@/lib/getUser'
import Link from "next/link"

export const metadata: Metadata = {
    title: 'Users',
}



export default async function UsersPage() {
    // const userData: Promise<User> = getUser()

    // const user = await userData


    const user = {
        payload: {
            userName: "Wabjay"
        }
    }
    // console.log(user) // Did you find where this appears?

    const content = (
        <section>
            <h2>
                <Link href="/">Back to Home</Link>
            </h2>
            <br />
           {user.payload.userName}
        </section>
    )

    return content
          }