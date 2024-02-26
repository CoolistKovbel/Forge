import { auth } from '@/auth'
import React from 'react'

const Page = async () => {

  const user = await auth()

  return (
    <div>
        <h2>Dashboard</h2>
        {JSON.stringify(user)}
    </div>
  )
}

export default Page