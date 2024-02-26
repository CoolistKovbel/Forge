import { auth } from '@/auth'

const Page = async () => {
  const user = await auth()

  return (
    <main className='w-full min-h-screen bg-[#111] text-white p-4'>
      <h2>User profile</h2>
    </main>
  )
}

export default Page