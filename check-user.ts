import { db } from './lib/db'

async function check() {
    const user = await db.user.findUnique({
        where: { email: 'admin@brentharen.com' },
    })
    console.log('Admin user found:', user)
}
check()
