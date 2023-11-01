import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='max-w-sm'>
        <h1 className='text-8xl text-center my-8'>Welcome!</h1>
        <h2 className='text-lg'>My name is Matthew Wong, I am a recent graduate Lehigh University with a Master's in Computer Science</h2>
      </div>
    </main>
  )
}
