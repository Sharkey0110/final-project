import { Hero } from '@/components'
import Image from 'next/image'

export const revalidate = 1;

export default function Home() {
  return (
    <main>
      <div className='md:flex'>
        <div>
          <Hero />
        </div>

      </div>
      
    </main>

  )
}
