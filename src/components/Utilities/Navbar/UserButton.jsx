import { authOption } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'

const UserButton = async() => {
    const user = await getServerSession(authOption)
    console.log(user)

  return (
    <div><Link href="/api/auth/signin" className="">Sign In</Link></div>
  )
}

export default UserButton