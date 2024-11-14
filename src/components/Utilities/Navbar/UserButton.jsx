import { authUserSession } from '@/service/auth-service'
import Link from 'next/link'
import React from 'react'

const UserButton = async() => {
    const user = await authUserSession();
    
  return (
    <div><Link href="/api/auth/signin" className="">Sign In</Link></div>
  )
}

export default UserButton