import { authUserSession } from '@/service/auth-service'
import Image from 'next/image'
import React from 'react'


const Page = async() => {
    const user = await authUserSession()

    return (
    <div className='text-color-primary'>
        <h1>DASHBOARD</h1>
        <h1>Hai, {user.name}</h1>
        <Image src={user.image} alt="..." width={250} height={250}/>
    </div>
  )
}

export default Page